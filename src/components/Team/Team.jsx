import React from 'react'; 
import "./Team.css";
import profile from "../../assets/profile.jpg"; 

const Team = () => {
  return (
    <>
    <div className="team_container">
      <div className="content">
        <h6>Our Team</h6>
        <h5>Rencontrez-nous</h5>
      </div>

      <div className="row">

        <div className="col-sm-4">
          <div className="box">
            <img src={profile} className="img-fluid" alt="" />
          </div>
        </div>

        <div className="col-sm-4">
          <div className="box">
            <img src={profile} className="img-fluid" alt="" />
          </div>
        </div>

        <div className="col-sm-4">
          <div className="box">
            <img src={profile} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Team