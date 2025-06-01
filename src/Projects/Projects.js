import React from "react";
import classes from "../../src/components/about/About.module.css";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import "../Projects/Projects.css";
import Homed from "../../src/homed.jpg";
import Memory from "../../src/mem.PNG";
import Notes from "../../src/notes.jpg";
import Weather from "../../src/weather.jpg";
import Amazon from "../../src/amazon.jpg";
import Covid19 from "../../src/covid19.jpg";

export default function App() {
  return (
    <>
      {/* <span className={classes.head}>Tech Stacks</span>
      <h2 className={classes.heading} id="Project_scroll">
        Currently Exploring : Scalable backend system in Springboot with Microservices , kafka , gRPC etc ...
      </h2> */}

<span className={classes.head} id="project">WHAT DO I KNOW</span>
      <h2 className={classes.heading} id="Project_scroll">
       Tech Stacks
      </h2>
<div className="tech-card">
      <p className="tech-subtitle">
        Currently Exploring: <strong>Spring Boot</strong>, <strong>Microservices</strong>, <strong>LLD</strong>, <strong>AI/ML</strong>, <strong>& Cloud Technologies</strong> etc.
      </p>

      <div className="tech-grid">
        <div className="tech-block">
          <h4>Languages</h4>
          <p>Java, C++, TypeScript, JavaScript , Python</p>
        </div>
        <div className="tech-block">
          <h4>Frontend</h4>
          <p>Angular, ReactJS</p>
        </div>
        <div className="tech-block">
          <h4>Backend</h4>
          <p>Spring Boot, Node.js, Microservices, gRPC , Kafka, Redis , Grafana</p>
        </div>
        <div className="tech-block">
          <h4>Databases</h4>
          <p>MongoDB, SQL</p>
        </div>
        <div className="tech-block">
          <h4>Tools & DevOps</h4>
          <p>Git, CI/CD (GitHub Actions / Jenkins)</p>
        </div>
        <div className="tech-block">
          <h4>Other Skills</h4>
          <p>Problem Solving, System Design, API Integration</p>
        </div>
      </div>
    </div>

      <span className={classes.head}>Projects</span>
      <h2 className={classes.heading} id="Project_scroll">
        All Projects
      </h2>

      <MDBRow className="row-cols-1 row-cols-md-3 g-4">
        <MDBCol>
          <MDBCard style={{ margin: "1rem", overflow: "hidden" }}>
            <MDBCardImage
              src={Amazon}
              alt="..."
              position="top"
              className="imghov"
            />
            <MDBCardBody style={{ marginTop: "2rem" }}>
              <MDBCardTitle>
                {" "}
                <a
                  href="https://amazon-hosted.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}>
                  Amazon 2.0
                </a>
              </MDBCardTitle>
              <MDBCardText>
                Built an E-commerce website for the latest products avaiable
                globally. User can Place Order in Cart , Review the Cart during
                checkout , See the placed orders and return with their estimated
                date of delivery .Intregrated Firebase Authentication Methods
                for Authenticating the Users and the product sellers seperately,
                Used Stripe.js for payment from the user. Added admin panel to
                add products and view orders,products and users
                <br />
                <br />
                <a
                  href="https://github.com/ArindamDutta02082001/Amazon_Clone_final"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "underline" }}>
                  Github
                </a>
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard style={{ margin: "1rem", overflow: "hidden" }}>
            <MDBCardImage
              src={Covid19}
              alt="..."
              position="top"
              className="imghov"
            />
            <MDBCardBody style={{ marginTop: "2rem" }}>
              <MDBCardTitle>
                {" "}
                <a
                  href="https://arindam0208.000webhostapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}>
                  Cova19_Informer
                </a>
              </MDBCardTitle>
              <MDBCardText>
                Built an Covid19 website for registering and tracking patients
                during Covid19 outbreak . New users can register themselves for
                Covid19 checkup and can get an estimated date and time schedule
                . Existing users can check and collect their reports . Added
                admin panel to check onto patients and phlebotomists , number of
                sample collected , lab information and view reports.
                <br />
                <br />
                <a
                  href="https://github.com/ArindamDutta02082001/Cova19_Informer"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "underline" }}>
                  Github
                </a>
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard style={{ margin: "1rem", overflow: "hidden" }}>
            <MDBCardImage
              src={Memory}
              alt="..."
              position="top"
              className="imghov"
            />
            <MDBCardBody style={{ marginTop: "2rem" }}>
              <MDBCardTitle>
                {" "}
                <a
                  href="https://memorica.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}>
                  Memorica
                </a>
              </MDBCardTitle>
              <MDBCardText>
                Web application that empowers multiple users tos POST , DELETE,
                UPDATE , READ , cherish and share their memorable experiences in
                a seamless and captivating way. Each memory is assigned with
                their unique IDs through which it can be configured and maintain
                by user.
                <br />
                <br />
                <a
                  href="https://github.com/ArindamDutta02082001/Memorica_final"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "underline" }}>
                  Github
                </a>
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>

      <MDBRow className="row-cols-1 row-cols-md-3 g-4">
        <MDBCol>
          <MDBCard style={{ margin: "1rem", overflow: "hidden" }}>
            <MDBCardImage
              src={Homed}
              alt="..."
              position="top"
              className="imghov"
            />
            <MDBCardBody style={{ marginTop: "2rem" }}>
              <MDBCardTitle>
                <a
                  href="https://interiordesignfinal.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}>
                  G. Interiors
                </a>
              </MDBCardTitle>
              <MDBCardText>
                A frontend template of Home Interior Website using HTML , CSS ,
                Bootstrap .
                <br />
                <br />
                <a
                  href="https://github.com/ArindamDutta02082001/ArindamDutta02082001.github.io/tree/main/Interior_Design"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "underline" }}>
                  Github
                </a>
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard style={{ margin: "1rem", overflow: "hidden" }}>
            <MDBCardImage
              src={Weather}
              alt="..."
              position="top"
              className="imghov"
            />
            <MDBCardBody style={{ marginTop: "2rem" }}>
              <MDBCardTitle>
                <a
                  href="https://tatkalweatherfinal.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}>
                  Tatkal Weather Information
                </a>
              </MDBCardTitle>

              <MDBCardText>
                Dynamic Weather Information Fetching site that uses Metaweather
                API to fetch data asynchronously. REACTJS & JAVASCRIPT used for
                developement.
                <br />
                <br />
                <a
                  href="https://github.com/ArindamDutta02082001/TatkalWeather"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "underline" }}>
                  Github
                </a>
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard style={{ margin: "1rem", overflow: "hidden" }}>
            <MDBCardImage
              src={Notes}
              alt="..."
              position="top"
              className="imghov"
            />
            <MDBCardBody style={{ marginTop: "2rem" }}>
              <MDBCardTitle>
                {" "}
                <a
                  href="https://notesfinal.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}>
                  My Notes
                </a>
              </MDBCardTitle>
              <MDBCardText>
                A Note Taking website made with the purpose of listing the to-do
                tasks.User can Add , Delete as well as Modify the contents
                entered in it .If User gets bored they can play a Game to
                calculate your Spontaneous Reaction Time by measuring your
                quickness of Cursor Movement.Build using JAVASCRIPT , HTML ,
                CSS3 and the LOCALSTORAGE functionality is used.
                <br />
                <br />
                <a
                  href="https://github.com/ArindamDutta02082001/Notes_final"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "underline" }}>
                  Github
                </a>
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </>
  );
}
