import React from 'react'
import About from './About'
import Header from './Header';
import DiabetesCheck from "../component/assest/DiabetesCheck.jpg";
import logo from "../component/assest/logo-new1.png";
import blueseal from "../component/assest/blue-seal.png";
import removebg from "../component/assest/PNG-removebg-preview.png";
import "./CKD.css"
function HeartFailure() {
  return (
   <>
   <Header/>
   <div className='heading-section'>
   <h2>Heart Failure Support</h2></div>
  <div className="support-container">
  <div className="support-image">
        <img src={DiabetesCheck} alt="Support Image" />
      </div>
      <div className="support-content">
      <ul style={{ listStyleType: 'none', paddingLeft: 0 ,}}>
        <li style={{fontWeight:'bold' }}>The primary step is to qualify the patients <br></br> into our Remote Patient Monitoring (RPM), <br></br> Chronic Care Management (CCM), and <br></br>Principal Care  Management (PCM) programs..</li><br></br>
        <li>We can then avoid complications by <br></br>following the preventative steps mentioned <br></br> below:</li>
        </ul>
        <ul>
          <li>Collecting data: We collect blood<br></br> pressure, weights, and BMI data via <br></br>cellular blood pressure monitors and/or <br></br>weight scales that require minimal to no<br></br> effort performed by the patient.</li>
          <li>Transmission of data: Secure data <br></br>transfer and correspondence occur via<br></br> secure internet, phone, text, or other<br></br> forms of communication.</li>
          <li>Processing of data: The clinical team can<br></br> examine the data and point out any areas<br></br> of concern. The patient and the patient’s <br></br>healthcare team receive a report for out-of-range<br></br> data and how this data was managed.</li>
        </ul>
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
  )
}

export default HeartFailure
