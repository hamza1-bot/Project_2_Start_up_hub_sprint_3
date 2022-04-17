

import React, { useState, useEffect } from 'react';
import { userService } from '../../../services/UserServices';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from "react-router";

// Common footer component
const Footer = (props) => {

  const history = useHistory();

  // method to open our team page
  function openMyTeamPage(event) {
    event.preventDefault();
    history.push('/our_team');
  }
    return (
      <>
        <ToastContainer />
        <footer class="footer">
            <div class="container">
                <div class="row">
                        <div class="copy-right">
                            <p>© All Copy Rights <a onClick={(event)=>openMyTeamPage(event)}>Team Blue Screen</a>.</p>
                        </div>
                </div>
            </div>
        </footer>
      </>
    );
  };
  
  export default Footer;
  