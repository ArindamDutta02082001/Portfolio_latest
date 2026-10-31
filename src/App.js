import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import About from './components/about/About';
import Education from './components/Education/Education';
import Interest from './components/skills/Interest'
import CarouselImages from './components/carousel/CarouselImages.js'
import Project from './Projects/Projects';
import AnalyticsConsent from './components/AnalyticsConsent';
import { analyticsConfigured, initializeAnalytics } from './analytics';

const ANALYTICS_CONSENT_KEY = 'portfolio-analytics-consent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { analyticsConsent: this.getSavedAnalyticsConsent() };
    this.handleAnalyticsConsent = this.handleAnalyticsConsent.bind(this);
  }

  getSavedAnalyticsConsent() {
    try {
      const savedChoice = window.localStorage.getItem(ANALYTICS_CONSENT_KEY);
      if (savedChoice === 'accepted' || savedChoice === 'rejected') {
        return savedChoice;
      }
    } catch (error) {
      // Fall back to the persistent first-party cookie below.
    }

    const savedCookie = document.cookie
      .split('; ')
      .find((cookie) => cookie.startsWith(`${ANALYTICS_CONSENT_KEY}=`));
    const cookieChoice = savedCookie && savedCookie.split('=')[1];
    return cookieChoice === 'accepted' || cookieChoice === 'rejected'
      ? cookieChoice
      : null;
  }

  componentDidMount() {
    if (this.state.analyticsConsent === 'accepted') {
      initializeAnalytics();
    }
  }

  handleAnalyticsConsent(choice) {
    try {
      window.localStorage.setItem(ANALYTICS_CONSENT_KEY, choice);
    } catch (error) {
      // The persistent cookie below remains available if localStorage is blocked.
    }

    const secureCookie = window.location.protocol === 'https:' ? '; Secure' : '';
    document.cookie = `${ANALYTICS_CONSENT_KEY}=${choice}; Max-Age=31536000; Path=/; SameSite=Lax${secureCookie}`;

    this.setState({ analyticsConsent: choice });
    if (choice === 'accepted') {
      initializeAnalytics();
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="side">
            <nav className="navbar side navbar-expand-lg navbar-light p-0" >
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" style={{ zIndex: '1' }}>
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <Sidebar />
              </div>
            </nav>
          </div>
          <div className="main">
            <div className="carousel-shell">
              <CarouselImages />
            </div>
            <About />
            <Interest />
            <Education />
            <Project/>
          
          </div>
          <AnalyticsConsent
            visible={analyticsConfigured && this.state.analyticsConsent === null}
            onChoice={this.handleAnalyticsConsent}
          />
        </div>
      </Router>
    );
  }
}

export default App;
