import React from "react";
import "./Footer.css";
import { colors } from "@mui/material";

const Footer = () => {
  return (
    <>
      <div className="container-fluid main-wrapper2 mt-5">
        <div className="wrapper container">
          <div className="list">
            <div className="media-links  col-sm d-flex justify-content">
              <div className="telegram col-sm p-2">
                {" "}
                <i class="fab fa-telegram"></i>
              </div>
              <div className="linkedin col-sm p-2">
                <i class="fab fa-linkedin"></i>
              </div>
              <div className="whatsup col-sm p-2">
                {" "}
                <i class="fab fa-whatsapp"></i>
              </div>
            </div>
          </div>

          <div className="list">
            <h5 className="text-left">Contact Info</h5>
            <ul className="text-left p-0 m-0 pe-5">
              <li>Girmay</li>
              <li>Full stack software developer</li>
              <li> 6156934392</li>
              <li>girmaytajebe4@gmail.com</li>
              <li>
                <a style={{ color: "white" }} href="https://girmay23.com">
                  Portfolio Websit (www.girmay23.com)
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
