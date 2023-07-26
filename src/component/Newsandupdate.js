import React from 'react'
import Header from './Header'
import removebg from "../component/assest/PNG-removebg-preview.png";
import HeartDisease from "../component/assest/HeartDisease.jpg";
import Linkedad from "../component/assest/Linkedad.jpg";
import Capture from "../component/assest/Capture-1.jpg";
import "./Newsandupdate.css"
function Newsandupdate() {
  return (

   <>
       <Header/>
       <div className='Newsandupdate'>
     <img src={HeartDisease}></img>
     <img src={Linkedad}></img>
     <img src={Capture}></img>
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

export default Newsandupdate
