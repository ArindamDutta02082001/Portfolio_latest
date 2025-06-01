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
                <i>opportunities </i>
              </b>
              that not only offers professional growth and development but also
              provides a sense of purpose and fulfillment in contributing to the
              success of an organization
            </p>
            <p>
              As a Software Engineer with with <b>2+ years of industry experience</b> having a strong academic background and a strong passion for problem-solving
              and knowledge on CS fundametals ,
              <p>
                
  <br />
    Currently working as a <b>Software Engineer at Bosch</b>, contributing to impactful solutions using technologies like{" "}
    <b>.NET, Java, Spring Boot, Node.js , Azure & CICD</b>. Worked on scalable backend systems with Spring Boot and Oracle, developed <b>Log Analysis & Metrics tool</b> using .NET, and developed monolith service in Java & Springboot for an <b>AI RTC Ticket Analyzer</b>
    for 7k+ Users and optimized query performance with pagination, indexing, and custom repository methods.
  </p>


             Also got an opportunity at{" "}
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
                <i>Angular, Typescript, Java & Springboot </i>
              </b>{" "}
              as the backend along with other internal dependencies and modules. also explored
              about data binding , API Integration with the backend services and optimization techniques.
            </p>
            <p>
              Also had an oppurtunity to work at{" "}
              <b>
                <i>Amazon (Bangalore) </i>
              </b>{" "}
              as <b>Software Support Engineer </b> , where my responsibilty involved in
              developing and implementing the features for{" "}
              <b>Cross Border Origin Shipping </b> applications with the SDE members
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
              <b>Smart Bank , Online Library Management system , Amazon2.0 , Memorica , Cova19_Informer, My Notes</b> during my
              college time using{" "}
              <b>
                <i>
                  Reactjs, Angular, TypeScript 
                </i>
              </b>
              in the frontend and{" "}
              <b>
                <i>
                  Nodejs, JWT, Oauth2.0, MongoDB, MySQL ,gRPC, SpringBoot , Hibernate ,
                 Redis , Kafka and Microservices
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
