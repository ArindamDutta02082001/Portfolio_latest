import React, { Component } from 'react'
import classes from './About.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

class About extends Component {
    render() {
        return (
            <div className={classes.box} id="about">
                <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                    <span className={classes.head}>ABOUT ME</span>
                    <h2 className={classes.heading}>Who Am I?</h2>
                    <div className={classes.About}>
                        <p> My name is <b>ARINDAM DUTTA</b> and I am currently studying <b><i>B.Tech in Computer Science and Engineering</i></b>  at <b><i>Bangalore Institute of Technology</i></b> , Bangalore . I am in my 4th year of my Degree and would complete my degree by the end of 2023. I am much interested in developing new things which excite me a lot.</p>
                        <p className={classes.br}>I love exploring new technologies and being a practitioner, I like to stay on top of latest trends. I try to leave every line of code I write more readable, accessible, and modular.
                        </p>
                    </div>
                </ScrollAnimation>
            </div>
        )
    }
}

export default About;