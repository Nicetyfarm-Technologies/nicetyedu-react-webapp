import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faLinkedinIn, faWhatsapp, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone, faLocation } from '@fortawesome/free-solid-svg-icons'

const FacebookIcon = <FontAwesomeIcon icon={faFacebookF} />;
const LinkedInIcon = <FontAwesomeIcon icon={faLinkedinIn} />;
const WhatsappIcon = <FontAwesomeIcon icon={faWhatsapp} />;
const InstagramIcon = <FontAwesomeIcon icon={faInstagram} />;
const TwitterIcon = <FontAwesomeIcon icon={faTwitter} />;
const PhoneIcon = <FontAwesomeIcon icon={faPhone} />;
const EmailIcon = <FontAwesomeIcon icon={faEnvelope} />;
const LocationIcon = <FontAwesomeIcon icon={faLocation} />;

const aboutUs = {
	title: "About Us",
	description: `NicetyEdu which is just one of the products for Nicety Technologies,
	is a school management and school resources system designed to help
	productivity in schools, reducing costs, time, and reducing staff
	paperwork for security In schools.`
}

function Footer() {
  return (
    <div className="footer">
      <div className="container1">
        <div className="about">
			<h3>{aboutUs.title}</h3>
          <p>
            {aboutUs.description}
          </p>
		  <div className="social-links">
			<Link >{FacebookIcon}</Link>
			<Link >{LinkedInIcon}</Link>
			<Link >{WhatsappIcon}</Link>
			<Link >{InstagramIcon}</Link>
			<Link >{TwitterIcon}</Link>			
		  </div>
        </div>
		<div className="quick-links">
			<h3>Quick Links</h3>
			<div className="links">
				<Link >About Us</Link>
				<Link >Get Started</Link>
				<Link >Contact Us</Link>
				<Link >Help and Support</Link>
				<Link >Other Products</Link>
				<Link >Privacy Policy</Link>
			</div>
		</div>
		<div className="contactUs">
			<h3>Contact Us</h3>
			<div className="contacts">
				<div className="contact">
					{FacebookIcon}
					<p>@nicetyfarm-tech</p>
				</div>
				<div className="contact">
					{LinkedInIcon}
					<p>@nicetyfarm-tech</p>
				</div>
				<div className="contact">
					{PhoneIcon}
					<p>+260779293183, +260 97 3536566, +260 96 5240860, +260974405943</p>
				</div>
				<div className="contact">
					{EmailIcon}
					<p>info.nicetyfarm@gmail.com</p>
				</div>
				<div className="contact">
					{LocationIcon}
					<p>Plot 002, Nkwashi Estates, Chongwe Lusaka</p>
				</div>
			</div>
		</div>
      </div>
    </div>
  );
}

export default Footer;
