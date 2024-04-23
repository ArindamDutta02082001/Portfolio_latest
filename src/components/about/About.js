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
          initiallyVisible={true}>
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
              and aspirations. My primary goal is to harness new{" "}
              <b>
                <i>opportunities</i>
              </b>
              that not only offers professional growth and development but also
              provides a sense of purpose and fulfillment in contributing to the
              success of an organization
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
              Also had an oppurtunity to work at{" "}
              <b>
                <i>Amazon (Bangalore) </i>
              </b>{" "}
              as <b>Engineer I</b> , where my responsibilty involved in
              developing and implementing the features for{" "}
              <b>Cross Border Origin Shipping </b> system with the SDE members
              as required by the <b>Carriers</b> .Involved in onboarding of new
              carriers and
              <b> resolving issues</b> of various levels in Beta, Gamma and
              production environment. Implemented <b>Notiﬁcation System </b> for
              the Sellers and was involved in understanding of{" "}
              <b>Code Design Patterns</b> of the existing production system.
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
                <i>
                  Reactjs, Angular, Bootstrap5, ngPrime , MaterialUI , HTML ,
                  CSS , Javascript , TypeScript
                </i>
              </b>
              in the frontend and{" "}
              <b>
                <i>
                  Nodejs, JWT,MongoDB, MySQL ,gRPC ,Express , SpringBoot , Hibernate ,
                  JDPC , Redis , Kafka and Microservices
                </i>
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
