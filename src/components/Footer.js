import React from "react";
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";
import Link from '@material-ui/core/Link';

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <Link href="https://www.linkedin.com/in/ktari-ayman-369a72218/"  target="_blank" >
        <LinkedInIcon />
      </Link>
      
      <Link href="https://github.com/ktariayman"  target="_blank" >
      <GitHubIcon /> 
      </Link>

      <Link href="https://www.facebook.com/Ayman.Ktari0/"  target="_blank" >
        <FacebookIcon />
      </Link>

      </div>
      <p> &copy; 2022 FoodApp</p>
    </div>
  );
}

export default Footer;
