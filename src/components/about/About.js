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
              I am <b><i>Arindam Dutta</i></b>, a Software Engineer at
              <b> Target Retail Tech</b> and a Computer Science graduate from
              <b> Bangalore Institute of Technology</b> (2023). I build
              dependable software, solve complex engineering problems, and enjoy
              turning ideas into products that make a measurable difference.
            </p>
            <p>
              I am a software engineer with experience in backend systems, cloud
              platforms, and distributed applications. I currently work in
              <b> Target Retail Tech</b>, following engineering roles at
              <b> Salesforce</b> and <b> Bosch</b>. I focus on building secure,
              reliable services, improving performance, and making systems
              easier to operate.
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
