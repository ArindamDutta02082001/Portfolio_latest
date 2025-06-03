import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import classes from "./CarouselImages.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "animate.css/animate.min.css";
import { GoProject } from "react-icons/go";
import { FaArrowCircleDown } from "react-icons/fa";
import Hello from "../images/Hello.jpg";
import Pencil from "../images/Pencil.jpg";
import Resu from "../images/Arindam_Dutta_R25.pdf";
class CarouselImages extends Component {
  render() {
    return (
      <div className={classes.carousel_container} id="start">
        {/* <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible ={true}> */}
        <Carousel
          className={classes.carousel}
          dynamicHeight
          infiniteLoop={true}
          interval={3000}
          useKeyboardArrows={true}
          transitionTime={1700}
          emulateTouch
          showArrows={true}
          showStatus={false}
          autoPlay
          showThumbs={false}>
          <div className={classes.image_container}>
            <img className={classes.image} src={Hello} alt="myImage" />
            <div className={classes.h1}>
              <h1>I'm Arindam Dutta</h1>
              <a href={Resu} download="Resume_Arindam_pdf">
                Download CV <FaArrowCircleDown />
              </a>
            </div>
          </div>
          <div className={classes.image_container}>
            <img className={classes.image} src={Pencil} alt="myImage" />
            <div className={classes.h2}>
              <h1> I love building</h1>
              <h1>THINGS!!</h1>
              <a
                href="https://github.com/ArindamDutta02082001"
                rel="noopener noreferrer"
                target="_blank">
                All Projects <GoProject />
              </a>
              <div
                style={{
                  marginTop: "2rem",
                  fontSize: "2rem",
                  color: "white",
                  textAlign: "left",
                }}>
                <ul type="none">
                  <li style={{ marginTop: "1.5rem" }}>
                    <a
                      href="https://amazon-hosted.onrender.com/"
                      rel="noopener noreferrer"
                      target="_blank">
                      {" "}
                      Amazonia Website ->
                    </a>
                  </li>
                  <li style={{ marginTop: "1.5rem" }}>
                    <a
                      href="https://arindam0208.000webhostapp.com/"
                      rel="noopener noreferrer"
                      target="_blank">
                      Cova19_Informer ->
                    </a>
                  </li>
                  <li style={{ marginTop: "1.5rem" }}>
                    <a
                      href="https://memorica.onrender.com/"
                      target="_blank"
                      rel="noopener noreferrer">
                      {" "}
                      Memorica ->
                    </a>
                  </li>
                  <li style={{ marginTop: "1.5rem" }}>
                    <a href="#Project_scroll">See More</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <div className={classes.image_container}>
                    <img className={classes.image} src={laptop1} alt="myImage"/>
                    <div  className={classes.h1}> 
                    </div>
                </div> */}
        </Carousel>
        {/* </ScrollAnimation> */}
      </div>
    );
  }
}
export default CarouselImages;
