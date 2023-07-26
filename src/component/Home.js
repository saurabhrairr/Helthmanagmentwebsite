import React, { useState } from "react";
import Header from "./Header";
import "./Home.css";
import ccm from "../component/assest/ccm.png";
import Certified from "../component/assest/Certified-Women.jpg";
import cmsa from "../component/assest/cmsa-logo.png";
import rhihub from "../component/assest/rhihub-logo1.png";
import logo from "../component/assest/logo-new1.png";
import blueseal from "../component/assest/blue-seal.png";
import HeartFailure from "../component/assest/HeartFailure.png";
import diabetes from "../component/assest/diabetes.png";
import pulmonary from "../component/assest/pulmonary.png";
import removebg from "../component/assest/PNG-removebg-preview.png";
import ScrollToTopButton from "./ScrollToTopButton";
import { useNavigate } from 'react-router-dom'

function Home() {
  let navigate = useNavigate()


  return (
  
    <>
      <div>
        <div>
          <Header />
        </div>
        <div className="video-content">
          <img src={removebg}></img>
        </div>
        <div className="video-content1">
          <h1>Your Next Generation Telehealth Partner!</h1>
          <p>
            Mawenzi Health collaborates with medical professionals, private
            individuals, and corporations to offer personalized counseling
            services for providers managing Chronic Kidney Disease (CKD),
            End-Stage Renal Disease (ESRD), Hypertension, Diabetes, Heart
            Failure, and other chronic conditions. Our aim is to provide ongoing
            support and guidance to improve the overall well-being of all the
            particiapants.
          </p>
          <p>
            By working closely with their physicians, we ensure optimal outcomes
            and create additional revenue generation opportunities.
          </p>
        {/* LERAN MORE ABOUT US */}
        <button  >   <a  href="/About"  role="button"> LERAN MORE ABOUT US</a></button>
        </div>

        <div className="info">
          <h1>REMOTE MONITORING to manage chronic conditions effectively</h1>
        </div>
        <div className="info-main">
          <div className="info-content ">
            <p>
            Who We Help?
            </p>
            <li>Low health literacy</li>
            <li>
              Unnecessary utilization<br></br> (ER visits/hospital readmissions)
            </li>
            <li>
              Low compliance rate <br></br> with treatment plan
            </li>
            <li>
            Immobile patient<br></br> population.
            </li>
          </div>
          <div className="info-content">
            <p>
            How We Help?
            </p><br></br>
            <li>
            Anytime, anywhere <br></br>monitoring of the patients'<br></br> health.
            </li>
            <li>
              Education using best <br></br>practice educational <br></br>{" "}
              processes, resources & <br></br>materials
            </li>
            <li>
              Clinical assessments<br></br> & biometric monitoring
            </li>
            <li>
              Improvement in the<br></br> quality of life & support to<br></br>{" "}
              reduce the stress of caregiving
            </li>
          </div>
          <div className="info-content">
            <p>
            Reported Outcomes
            </p>
           <li> Increase in the productive<br></br> interactions between patients<br></br> and their clinicians by up to <br></br>45%.</li>
            <li>
            Improvement of patient<br></br> engagement by up to 82%.
            </li>
            <li>
              Maximized positive<br></br> clinical outcomes
            </li>
            <li>
            Decreased overall healthcare<br></br> expenditures by up to 21%.
            </li>
          </div>
        </div>
        <div className="customer-detail">
          <h1>Mawenzi Health brings VALUE by for:</h1>
        </div>
        <div className="boxcontainer">
          <div className="box">
            <img src={diabetes}></img>
            <p>Remote Patient Monitoring (RPM)</p>
            {/* <button>LERAN MORE</button> */}
            <button  >   <a  href="/Diabetes"  role="button"> LERAN MORE </a></button>
          </div>
          <div className="box">
            <img src={HeartFailure}></img>
            <p>Chronic Care Management (CCM)</p>
            {/* <button>LERAN MORE</button> */}
            <button  >   <a  href="/Diabetes"  role="button"> LERAN MORE </a></button>
          </div>
          <div className="box">
            <img src={pulmonary}></img>
            <p>Chronic Obstructive Pulmonary Disease</p>
            {/* <button>LERAN MORE</button> */}
            <button  >   <a href="/Diabetes"  role="button"> LERAN MORE </a></button>

  
          </div>
        </div>

        {/* <div className="imagecontainer">
          <div className="imagebox">
            <img src={ccm}></img>
          </div>
          <div className="imagebox">
            <img src={rhihub}></img>
          </div>
          <div className="imagebox">
            <img src={cmsa}></img>
          </div>
          <div className="imagebox">
            <img src={Certified}></img>
          </div>
        </div> */}
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
        <ScrollToTopButton/>
      </div>
    </>
  );
}

export default Home;
