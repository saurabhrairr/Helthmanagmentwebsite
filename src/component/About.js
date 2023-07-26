// import React from "react";
import mission from "../component/assest/mission.png";
import vision from "../component/assest/vision.png";
import culture from "../component/assest/culture.png";
import "./About.css";
import SherriWilliams from "../component/assest/SherriWilliams.jpg";
import Header from "./Header";
import logo from "../component/assest/logo-new1.png";
import blueseal from "../component/assest/blue-seal.png";
import removebg from "../component/assest/PNG-removebg-preview.png";
import React from 'react';

const About = () => {
  return (
    <>
     <Header/>
    <div className="container1">
      <div className="header1">
        <h1>About Mawenzi Health</h1>
        <p>Mawenzi Health was established in 2022 with the goal of maximizing the advantages of collaborative efforts between professional nurses<br></br> and various healthcare providers, including physicians, hospitals, medical groups, clinics, and health plans. We strive to enhance patient<br></br> outcomes, improve quality of life, and reduce healthcare costs. Our focus is on leveraging the collective expertise and resources of all<br></br> involved parties to deliver comprehensive and cost-effective healthcare solutions.</p>
      </div>
      <div className="content1">
        <div className="image-container1">
          <img src={SherriWilliams} alt="Mawenzi Health Image" />
        </div>
        <div className="text-container1">
  
        <img src={vision}></img>
        <span>Our Vision</span>
          <p>
            At Mawenzi Health, we aim to transform healthcare by<br></br> promoting health literacy, improving quality of life, and <br></br> ensuring patient and caregiver satisfaction.
          </p>
          <img src={mission}></img>
          <span>Our Mission</span>
          <p>
            At Mawenzi Health, we prioritize best practices in healthcare<br></br> to ensure optimal outcomes and generate improved<br></br> revenue opportunities for providers and medical groups.
          </p>

          <img src={culture}></img>
          <span>Our Culture</span>
          <p>
            At Mawenzi Health, we foster a culture of respect,<br></br> accountability, and passion for providing high-quality care <br></br>to our diverse clients and supporting each other as <br></br>professionals.
          </p>
        
         
        </div>
      </div>
    </div>

    <div className="footerbox">
          <div className="footercontainer">
            {/* <img src={logo}></img> */}
            <img src={removebg}></img>
            <p>
              We strive to reach the individuals goals as <br></br>well as the
              practitioners goals of <br></br> effectiveness in treatment and
              efficacy of <br></br> care
            </p>
            {/* <img src={blueseal}></img> */}
          </div>
          <div className="footercontainer">
            <h1>Office</h1>
            <p>
              Mawenzi Health Inc.<br></br>3 Columbus Circle, 15th Floor<br></br>
              New York, NY 10019<br></br>
              contact@mawenzihealth.com<br></br>
            </p>

            <h1>Hours</h1>
            <p>Monday - Friday</p>
            <p>800am - 5:00pm</p>
            <p>Saturday by Appointment</p>

            <h1>Phone</h1>
            <p>(502) 506-2639</p>
          </div>
          <div className="footerinputcontainer">
            <p>
              Stay Connected! Sign Up For<br></br> Our Mailing List
            </p>
            <div className="footerinput">
              <input type="text" placeholder="First Name" required />
              <input type="text" placeholder="last Name" required />
            </div>
            <div className="footerinput1">
              <input type="email" placeholder="Email" required />
            </div>
            <div className="footerinput1">
              <button>Subscribe </button>
            </div>
          </div>
        </div>
        <div className="footertag">
          <p>
            © 2020 - 2023 healthmaintenanceadvantage.com. All Rights Reserved.
            Web Design by KimiWeb
          </p>
        </div>
    </>
  );
};

export default About;


