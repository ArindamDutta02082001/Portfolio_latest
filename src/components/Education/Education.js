import React, { Component } from "react";
import classes from "./Education.module.css";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import { MdSchool } from "react-icons/md";
import { MdWork } from "react-icons/md";
import { FaSchool } from "react-icons/fa";

class Education extends Component {
  render() {
    return (
      <div className={classes.box} id="education">
        <ScrollAnimation
          offset={0}
          animateIn="fadeInLeft"
          duration={2}
          animateOnce={true}
          initiallyVisible={true}>
          <span className={classes.head}>MY JOURNEY</span>
          <section className={classes.container}>
            <div className={classes.container_content}>
              <div className={classes.row}>
                <div className={classes.row_md_12}>
                  <div className={classes.timeline_centered}>
                    <ScrollAnimation
                      offset={0}
                      animateIn="fadeInLeft"
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}>
                      <article className={classes.timeline_entry}>
                        <div
                          className={`${classes.timeline_icon} ${classes.timeline_icon_5}`}>
                          <MdWork />
                        </div>
                        <div className={classes.label}>
                          <h2>Class X </h2>
                          <p>
                            {" "}
                            I completed my Primary Education till class 10th in{" "}
                            <b>Saint Teresa`s School, </b> Makrampur Bolpur I
                            secured <b>91%</b> in my ICSE board exam in the year{" "}
                            <b>2017</b>.{" "}
                          </p>
                        </div>
                      </article>
                    </ScrollAnimation>
                    <ScrollAnimation
                      offset={0}
                      animateIn="fadeInLeft"
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}>
                      <article className={classes.timeline_entry}>
                        <div className={classes.timeline_icon}>
                          <MdSchool />
                        </div>
                        <div className={classes.label}>
                          <h2>Class XII </h2>
                          <p>
                            I completed my Primary Education till class 10th in{" "}
                            <b>Hem Sheela Model School,</b> Durgapur . I secured{" "}
                            <b>94%</b> in my CBSE board exam in the year{" "}
                            <b>2019</b>.
                          </p>
                        </div>
                      </article>
                    </ScrollAnimation>
                    <ScrollAnimation
                      offset={0}
                      animateIn="fadeInLeft"
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}>
                      <article className={classes.timeline_entry}>
                        <div
                          className={`${classes.timeline_icon} ${classes.timeline_icon_2}`}>
                          <FaSchool />
                        </div>
                        <div className={classes.label}>
                          <h2>Under Graduation ( B.Tech )</h2>
                          <p>
                            I have completed my Graduation and received my{" "}
                            <b> Bachelor`s Degree</b> from{" "}
                            <b>Bangalore Institute of Technology </b> with major
                            subjects as <b> Computer Science and Engineering</b>{" "}
                            with <b>8.4 CGPA</b> under the Visvesvaraya
                            Technological University,
                            <b>2023</b>.{" "}
                          </p>
                        </div>
                      </article>
                    </ScrollAnimation>

                    <ScrollAnimation
                      offset={0}
                      animateIn="fadeInLeft"
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}>
                      <article>
                        <div
                          className={`${classes.timeline_icon} ${classes.timeline_icon_4}`}>
                          <MdWork />
                        </div>

                        <div className={classes.timeline_entry_inner}>
                          <div
                            className={
                              classes.timeline_icon_3 || classes.color_none
                            }></div>
                        </div>
                        <div className={classes.label}>
                          <h2>Opentext India Ltd.</h2>
                          <ul>
                            <li>Completed a six-month SDE internship (February–August 2023) on an Identity Lifecycle Management product.</li>
                            <li>Built dashboard and driver-configuration features using Angular and TypeScript, backed by Java and Spring Boot.</li>
                            <li>Integrated frontend workflows with backend APIs and improved data binding across product modules.</li>
                          </ul>
                        </div>
                      </article>
                    </ScrollAnimation>
                    <ScrollAnimation
                      offset={0}
                      animateIn="fadeInLeft"
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}>
                      <article>
                        <div
                          className={`${classes.timeline_icon} ${classes.timeline_icon_4}`}>
                          <MdWork />
                        </div>

                        <div className={classes.timeline_entry_inner}></div>
                        <div className={classes.label}>
                          <h2>Amazon</h2>
                          <ul>
                            <li>Worked as an L3 Engineer I with the SEND team on Cross Border Origin Shipping (October–December 2023).</li>
                            <li>Supported carrier onboarding and resolved issues across beta, gamma, and production environments.</li>
                            <li>Delivered seller notification features and collaborated with SDEs on production improvements.</li>
                          </ul>
                        </div>
                      </article>
                    </ScrollAnimation>
                    <ScrollAnimation
                      offset={0}
                      animateIn="fadeInLeft"
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}>
                      <article>
                        <div
                          className={`${classes.timeline_icon} ${classes.timeline_icon_4}`}>
                          <MdWork />
                        </div>
                        <div className={classes.timeline_entry_inner}>
                          <div className={classes.timeline_icon_3 || classes.color_none}></div>
                        </div>
                        <div className={classes.label}>
                          <h2>Bosch Global Software Technologies</h2>
                          <ul>
                            <li>Built Spring Boot services for 30K+ users with 99% uptime; optimized data access and asynchronous processing to bring client latency to 90 ms.</li>
                            <li>Secured 60+ REST APIs with Spring Security, LDAP, OAuth2, and JWT; modernized Java 8 applications to Java 17 and Spring Boot 3.</li>
                            <li>Containerized services for Azure/Jenkins delivery and built a C# log tool processing 5 TB of data, improving log efficiency by 30%.</li>
                            <li>Cut Jenkins builds from 25 to 5 minutes and raised test coverage from 68% to 82% with parallel execution, xUnit, and SonarQube.</li>
                          </ul>
                        </div>
                      </article>
                    </ScrollAnimation>
                    <ScrollAnimation
                      offset={0}
                      animateIn="fadeInLeft"
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}>
                      <article>
                        <div
                          className={`${classes.timeline_icon} ${classes.timeline_icon_4}`}>
                          <MdWork />
                        </div>
                        <div className={classes.timeline_entry_inner}>
                          <div className={classes.timeline_icon_3 || classes.color_none}></div>
                        </div>
                        <div className={classes.label}>
                          <h2>Salesforce</h2>
                          <ul>
                            <li>Centralized fine-grained authorization for 20+ metadata APIs with annotation-driven Spring AOP.</li>
                            <li>Migrated 400+ automated API tests, strengthening regression coverage and CI reliability.</li>
                            <li>Processed 10K+ asynchronous jobs with Kafka and maintained audit history for traceability.</li>
                            <li>Resolved production incidents through root-cause analysis and lasting cross-team fixes.</li>
                          </ul>
                        </div>
                      </article>
                    </ScrollAnimation>
                    <ScrollAnimation
                      offset={0}
                      animateIn="fadeInLeft"
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}>
                      <article>
                        <div
                          className={`${classes.timeline_icon} ${classes.timeline_icon_4}`}>
                          <MdWork />
                        </div>
                        <div className={classes.timeline_entry_inner}>
                          <div className={classes.timeline_icon_3 || classes.color_none}></div>
                        </div>
                        <div className={classes.label}>
                          <h2>Target — Software Engineer, Retail Tech</h2>
                          <ul>
                            <li>Building dependable retail technology across commerce workflows.</li>
                            <li>Focusing on resilient services, reliable data flows, and improved operational visibility.</li>
                          </ul>
                        </div>
                      </article>
                    </ScrollAnimation>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>
      </div>
    );
  }
}

export default Education;
