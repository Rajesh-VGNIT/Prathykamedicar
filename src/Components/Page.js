import React, { useState } from "react";
import { TbReportAnalytics } from "react-icons/tb";

const Page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [treathment, setTreathment] = useState("");
  const [query, setQuery] = useState("");

  const collectData = async (e) => {
    e.preventDefault();
    console.log(name, email, phone, aadhar, city, treathment, query);
    if (name === "") {
      alert("please enter name");
    } else if (!email.includes("@")) {
      alert(" please enter special charecter in your email like this: @");
    } else if (!email.includes(".com")) {
      alert("please enter .com in your email");
    } else if (address === "") {
      alert("please enter address");
    } else if (city === "") {
      alert("please enter city");
    } else if (treathment === "") {
      alert("please enter treathment");
    } else if (query === "") {
      alert("please enter query");
    } else {
      if (phone.length === 10) {
        if (aadhar.length === 12) {
          let result = await fetch("http://localhost:5003/register", {
            method: "post",
            body: JSON.stringify({
              name,
              email,
              phone,
              aadhar,
              city,
              treathment,
              query,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          });
          

          result = await result.json();
          if (result) {
            setName("");
            setEmail("");
            setPhone("");
            setAddress("");
            setAadhar("");
            setTreathment("");
            setCity("");
            setQuery("");
            alert("Appointment Book Successfully");
            // navigate("/");
          }
        } else {
          alert("please enter 12 digit aadhar number");
        }
      } else {
        alert("please enter your number 10 digit");
      }
    }
  };

  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <img src="./Images/download.png" alt="logo" />
          </div>
          <div className="btn1">
            <a href="#appointment_form">
              {" "}
              <button>
                <span className="calender">
                  <TbReportAnalytics />
                </span>{" "}
                Appointment
              </button>
            </a>
          </div>
        </div>
      </nav>
      <div className="container ">
        {/* ========================Step1============================ */}
        <div className="row  wrappers">
        <marquee
            style={{
              letterSpacing: "1px",
              zIndex: "-1",
              position: "relative",
              color: "rgb(53,85,139)",
            }}
            width="60%"
            direction="left"
            height="50px"
          >
            <h4 style={{ color: "black", fontSize: "20px" }}>
             
            We are organizing an assessment camp and workshop from <span style={{fontSize:"22px",color:"rgb(53,85,139)"}}>17<sup>th</sup>&nbsp; to 24<sup>th</sup>&nbsp; August </span>on behalf of 76 year of independence first 100 people will be paying only Rs.<span style={{fontSize:"22px",color:"rgb(53,85,139)"}}>76.00/-</span>

            </h4>
          </marquee>
{/* =====================Image Button========================= */}
          <div className="wrapper-page">
          <img
            className="img1"
            src="./Images/physio.png"
            alt="demo1"
            useMap="#image_map"
          />
          {/* <button class="btn3 ">Book An appointment</button> */}
          <a href="#appointment_form"> <button className="btn4">Book An appointment</button></a>
          </div>

          <div className="col-sm-8 col-md-8 mt-3">
            <div className=" wrapper">
              <h3 className="mt-2">What Is Physiotherapy & Rehabilitation?</h3>
              <p>
                <b>Orthopaedic Physiotherapy </b>services are available to
                build, maintain, and recover maximum movement and functional
                capacity for an individual throughout their lifespan. This
                includes offering services to those whose ability to move and
                function is jeopardized due to old age, injury, illness,
                disorder, ailments, or environmental causes. What it means to be
                healthy is fundamentally based on functional movement.
              </p>
              <p>
                In the areas of promotion, prevention, treatment/intervention,
                and rehabilitation, physiotherapy focuses on finding and
                maximizing quality of life and movement potential. This includes
                one's emotional, social, psychological, and physical health. In
                a process where movement potential is assessed and goals are
                agreed upon, physical therapy involves contact between physical
                therapists, patients/clients, other healthcare professionals,
                families, carers, and communities.
              </p>

              <p>
                <b>
                  For a human body to attain well-being, it must be nourished
                  through exercise, correct posture, and sleep. If you have knee
                  pain , cervical or neck pain <br /> <br />
                  We are organizing an assessment camp and workshop from 17<sup>th</sup>
                   &nbsp; to 24 Aug on behalf of 76 year of independence first 100
                  people will be paying only Rs.<span style={{fontSize:"18px"}}>76.00</span> .
                </b>
              </p>

              <p>
                <b>Note:-</b> Please share YOUR NAME, PLACE, AND email id to
                participate throw Appointment/Whatsapp.
              </p>
              
            </div>
          </div>
          <div className="col-sm-4 col-md-4 mt-3">
            <div id="appointment_form">
              <div>
                {/*====================Login Form======================*/}
                <div className="login">
                  <h3>Enquire Now</h3>
                  <form method="post">
                    <input
                      type="text"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Name"
                      required="required"
                    />

                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      required="required"
                    />
                    <input
                      type="number"
                      name="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Phone"
                      required="required"
                    />
                    <input
                      type="number"
                      name="aadhar"
                      value={aadhar}
                      onChange={(e) => setAadhar(e.target.value)}
                      placeholder="Aadhar No"
                      required="required"
                    />
                    <input
                      type="text"
                      name="address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Address"
                      required="required"
                    />

                    <div>
                      <select
                        name="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required="required"
                      >
                        <option>City*</option>
                        <option>Delhi</option>
                        <option>Panipat (Haryana)</option>
                        <option>Kurukshetra (Haryana)</option>
                      </select>
                    </div>

                    <div>
                      <select
                        name="treathment"
                        value={treathment}
                        onChange={(e) => setTreathment(e.target.value)}
                        required="required"
                      >
                        <option>Treathment Preferred*</option>
                        <option>Total Knee Replacement</option>
                        <option>Total Hip Replacement</option>
                        <option>Revision Knee Replacement</option>
                        <option>Revision Hip Replacement</option>
                        <option>Shoulder Replacement</option>
                      </select>
                    </div>

                    <textarea
                      type="text"
                      name="query"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Your Query"
                      required="required"
                    />
                    <button
                      type="submit"
                      onClick={(e) => collectData(e)}
                      className="btn  btn-block btn-large"
                    >
                      Submit Now
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
