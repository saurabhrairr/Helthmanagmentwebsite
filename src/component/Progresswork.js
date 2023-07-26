import React from 'react'
import Header from './Header'
import logo from "../component/assest/logo-new1.png";
import blueseal from "../component/assest/blue-seal.png";
import programworks from "../video/How.mp4"
import "./Progresswork.css";


function Progresswork() {
  return (
  <>
   <Header/>
   <div className="container1">
     <video  className="responsive-video" controls >
      <source src={programworks} type='video/mp4' />
     </video>
    </div>

   <div className="footerbox">
          <div className="footercontainer">
            <img src={logo}></img>
            <p>
              We strive to reach the individuals goals as  <br></br>well as
              the practitioners goals of <br></br>  effectiveness in
              treatment and efficacy of <br></br> care
            </p>
            {/* <img src={blueseal}></img> */}
          </div>
          <div className="footercontainer">
            <h1>Office</h1>
            <p>
              10200 Forest Green Blvd Suite<br></br> 112 Louisville, KY 40223
            </p>

            <h1>Hours</h1>
            <p>Monday - Friday</p>
            <p>800am - 5:00pm</p>
            <p>Saturday by Appointment</p>

            <h1>Phone</h1>
            <p>(502) 506-2639</p>
          </div>
          <div className="footerinputcontainer">
            <p>Stay Connected! Sign Up For Our <br></br>Mailing List</p>
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

export default Progresswork
