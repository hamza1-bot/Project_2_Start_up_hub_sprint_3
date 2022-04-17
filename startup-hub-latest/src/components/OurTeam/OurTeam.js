
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import $ from 'jquery';
import team1 from "../../assets/images/Business-Team-1.png"
import team2 from "../../assets/images/Business-Team-2.png"
import team3 from "../../assets/images/Business-Team-3.png"
import team4 from "../../assets/images/Business-Team-4.png"

import profile from "../../assets/images/profile.jpg"

// Out team component
const OurTeam = (props) => {

    useEffect(() => {    // Update the document title using the browser API
        $('#idHeaderHome').addClass('active');
        $('#idHeaderLogin').removeClass('active');
        $('#idHeaderRegister').removeClass('active');
        $('#idHeaderProfile').removeClass('active');
        if(localStorage.getItem("isLoggedIn") != null && localStorage.getItem("isLoggedIn") == "true") {
            $('.classAfterLogin').show();
            $('.classBeforeLogin').hide();
            $('#idLoggedInUserName').html(JSON.parse(localStorage.getItem('user')).firstName + ' ' + JSON.parse(localStorage.getItem('user')).lastName);
            if(JSON.parse(localStorage.getItem('user')).userImage != null) {
                $("#idLoggedInUserImage").attr("src", window.$mediaURL + JSON.parse(localStorage.getItem('user')).userImage);
            }
        } else {
            $('.classBeforeLogin').show();
            $('.classAfterLogin').hide();
        }
    }, []);

    return (
      <>
        <ToastContainer />
        <section class="profile_sec">
            <div class="Profile-img-head">
                <img src={profile} alt="" style={{"height" : 125}} />
            </div>
        </section>
        <section class="team-sec">
        <div class="heading text-center">
            <h2>Our Team</h2>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <div class="team-box">
                        <div class="img-box">
                            <img src={team1} alt="" />
                        </div>
                        <div class="detail">
                            <h5>Mark Johnson</h5>
                            <h6>Developer at Google</h6>
                            <p>Lorem ipsum dolor sit amet consect adipiscing elit, sed diam.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="team-box">
                        <div class="img-box">
                            <img src={team2} alt="" />
                        </div>
                        <div class="detail">
                            <h5>Johanna Liebowitz</h5>
                            <h6>Marketing Manager at H&M</h6>
                            <p>Lorem ipsum dolor sit amet consect adipiscing elit, sed diam.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="team-box">
                        <div class="img-box">
                            <img src={team3} alt="" />
                        </div>
                        <div class="detail">
                            <h5>Daniel McJames</h5>
                            <h6>UI Designer at Netflix</h6>
                            <p>Lorem ipsum dolor sit amet consect adipiscing elit, sed diam.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="team-box">
                        <div class="img-box">
                            <img src={team4} alt="" />
                        </div>
                        <div class="detail">
                            <h5>Laura Smith</h5>
                            <h6>Account Manager at Amazon</h6>
                            <p>Lorem ipsum dolor sit amet consect adipiscing elit, sed diam.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
      </>
    );
  };
  
export default OurTeam;