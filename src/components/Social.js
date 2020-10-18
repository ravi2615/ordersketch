import React from "react";
// import { NavLink } from "react-router-dom";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
// import YouTubeIcon from '@material-ui/icons/YouTube';
import './Social.css';

const Footer = () => {

    return (
        <>
            <footer className="container-fluid text-center ">
                <div className="social_media p-3 text-light">
                    <a href=""> <FacebookIcon className="icon_f" /> </a>
                    <a href=""> <LinkedInIcon className="icon_l" /> </a>
                    <a href=""> <InstagramIcon className="icon_i" /> </a>
                    <a href=""> <TwitterIcon className="icon_t" /> </a>
                    {/* <a href="/e"> <YouTubeIcon className="icon_y" /> </a> */}
                </div>
                <div className="text-white p-3"> &#x00A9; 2020 Sketch. All Rights Reserved | Terms and Condition Apply </div>
            </footer>
        </>
    );
};
export default Footer;