import React, { Component } from "react";
import classes from "./About.module.css";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

class About extends Component {
  render() {
    return (
      <div className={classes.box} id="about">
        <ScrollAnimation
          offset={0}
          animateIn="fadeInLeft"
          duration={2.4}
          animateOnce={true}
          initiallyVisible={true}
        >
          <span className={classes.head}>ABOUT ME</span>
          <h2 className={classes.heading}>Who Am I?</h2>
          <div className={classes.About}>
            <p>
              I am{" "}
              <b>
                <i>Arindam Dutta</i>
              </b>
              , completed my{" "}
              <b>
                <i>B.Tech in Computer Science and Engineering</i>
              </b>{" "}
              from{" "}
              <b>
                <i>Bangalore Institute of Technology</i>
              </b>
              , Bangalore in 2023. I am eagerly exploring various avenues and
              openings to discover a role that aligns with my skills, passions,
              and aspirations. My primary goal is to secure a{" "}
              <b>
                <i>job opportunity</i>
              </b>
              that not only offers professional growth and development but also
              provides a sense of purpose and fulfillment in contributing to the
              success of the organization
            </p>
            <p>
              As a Software Engineer with a strong passion for problem-solving
              and knowledge on CS fundametals, got an opportunity at{" "}
              <b>
                <i>Opentext (Bangalore) </i>
              </b>{" "}
              as <b>SDE Intern for 6 months</b> to explore range of innovative
              projects, including a complex-dashboard application and building
              driver configuration pages in{" "}
              <b>
                <i>Identity Lifecycle Management</i>
              </b>{" "}
              using{" "}
              <b>
                <i>Angular, Typescript, UXAspects, NgPrime</i>
              </b>{" "}
              along with other internal dependencies and modules. also explored
              about data binding , API Intregration with the backend services.
            </p>
            <p>
              Alongside my expertise in frontend and backend technologies, I
              have honed my proficiency in DSA, practised{" "}
              <b>
                <i>600+ Coding problems</i>
              </b>{" "}
              on platforms like GeekforGeeks and LeetCode. Explore various tech
              stacks and developed projects like{" "}
              <b>Amazon2.0 , Memorica , Cova19_Informer, My Notes</b> during my
              college time using{" "}
              <b>
                <i>Reactjs , Bootstrap5, HTML , CSS , Javascript</i>
              </b>
              in the frontend and{" "}
              <b>
                <i>Nodejs, MongoDB, Express and SQL</i>
              </b>{" "}
              in the backend and database technologies.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    );
  }
}

export default About;
