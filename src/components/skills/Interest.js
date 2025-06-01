import React, { Component } from 'react'
import classes from './Interest.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

class Interest extends Component {
  render() {
    return (
      <div className={classes.box} id="interest">
        <ScrollAnimation
          offset={0}
          animateIn="fadeInLeft"
          duration={2.4}
          animateOnce={true}
          initiallyVisible={true}>
          <span className={classes.head}>WHAT I DO?</span>
          <h2 className={classes.heading}>HERE ARE SOME OF MY EXPERTISE</h2>
          <div className={classes.Interest}>
            <ScrollAnimation
              offset={0}
              animateIn="fadeInLeft"
              duration={2.4}
              animateOnce={true}
              initiallyVisible={true}>
              <div className={classes.web}>
                <h3>Problem Solving</h3>
                <p>
                  I also have knowledge on development as well as problem
                  solving in DSA using C++ and Java. Have practised problems
                  involving different levels of difficulty and algorithm.{" "}
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              offset={0}
              animateIn="fadeInLeft"
              duration={2.4}
              animateOnce={true}
              initiallyVisible={true}>
              <div className={classes.app}>
                <h3>Web Develpoment</h3>
                <p>
                  I am a fullstack developer and had profiency in building
                  stuufs using various technologies including ReactJs, Angular
                  , Nodejs, MySQl  MongDB , Kafka etc .
                  Also had a grasp over various version control systems like git. Automation with Jenkins and CICD
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              offset={0}
              animateIn="fadeInLeft"
              duration={2.4}
              animateOnce={true}
              initiallyVisible={true}>
              <div className={classes.other}>
                <h3>Other's Interest</h3>
                <p>
                  I have got oppurtunities in contributing to various other projects and open sources{" "}
                  <br /> Also my hobbies include reading and undertanding other`s contributions , go through new technogies & go through codes. Currently, I am
                  invested into the backend systems and distributed systems . Currently exploring cloud tech & AI/ML.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </ScrollAnimation>
      </div>
    );
  }
}

export default Interest;