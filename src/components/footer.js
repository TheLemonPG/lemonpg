import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLeaf,
  faMapMarkedAlt,
  faEnvelope,
  faPhoneAlt
} from "@fortawesome/free-solid-svg-icons";
import "../css/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className=" d-flex justify-content-center">
          <h2 className="text-center">
            {" "}
            {/* <FontAwesomeIcon icon={faLeaf} /> PLANT */}
            Beach Resort
          </h2>
        </div>
        <div className=" d-flex justify-content-center">
          <p className="text-center">
            <FontAwesomeIcon icon={faMapMarkedAlt} />
            Tourusim Business, 2nd Block, USA
            <FontAwesomeIcon icon={faPhoneAlt} />
            +2499000000000
            <FontAwesomeIcon icon={faEnvelope} />
            Example@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
