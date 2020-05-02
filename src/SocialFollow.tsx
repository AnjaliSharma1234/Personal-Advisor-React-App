import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLinkedin,
  faTwitter,
  faGithub,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div className="social-container">
      <h3 className="heading">Created by Anjali Sharma</h3>
      <a
        href="https://www.linkedin.com/in/anjalisharmaaa/"
        className="linkedin social"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="https://github.com/AnjaliSharma1234" className="github social">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a href="https://twitter.com/AnjaliiSharmaaa" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://medium.com/@anjalisharmaaa" className="medium social">
        <FontAwesomeIcon icon={faMedium} size="2x" />
      </a>
    </div>
  );
}
