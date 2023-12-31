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
          initiallyVisible={true}
        >
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
                      initiallyVisible={true}
                    >
                      <article className={classes.timeline_entry}>
                        <div
                          className={`${classes.timeline_icon} ${classes.timeline_icon_5}`}
                        >
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
                      initiallyVisible={true}
                    >
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
                      initiallyVisible={true}
                    >
                      <article className={classes.timeline_entry}>
                        <div
                          className={`${classes.timeline_icon} ${classes.timeline_icon_2}`}
                        >
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
                      initiallyVisible={true}
                    >
                      <article>
                        <div
                          className={`${classes.timeline_icon} ${classes.timeline_icon_4}`}
                        >
                          <MdWork />
                        </div>

                        <div className={classes.timeline_entry_inner}>
                          <div
                            className={
                              classes.timeline_icon_3 || classes.color_none
                            }
                          ></div>
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
