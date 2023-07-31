import React, { useState } from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faWhatsapp,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhone,
  faLocation,
} from "@fortawesome/free-solid-svg-icons";

const FacebookIcon = <FontAwesomeIcon icon={faFacebookF} />;
const LinkedInIcon = <FontAwesomeIcon icon={faLinkedinIn} />;
const WhatsappIcon = <FontAwesomeIcon icon={faWhatsapp} />;
const InstagramIcon = <FontAwesomeIcon icon={faInstagram} />;
const TwitterIcon = <FontAwesomeIcon icon={faTwitter} />;
const PhoneIcon = <FontAwesomeIcon icon={faPhone} />;
const EmailIcon = <FontAwesomeIcon icon={faEnvelope} />;
const LocationIcon = <FontAwesomeIcon icon={faLocation} />;

function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="contact-container">
      <div className="contact-intro">
        <h2>Contact Us</h2>
        <p>Any question or remarks? Just write s a message!</p>
      </div>
      <div className="contact-container-inner">
        <div className="contact-info">
          <div className="info-container">
            <div className="info">
              <h3>Contact Information</h3>
              <p>
                Fil up the form and our team will get back to you within 24
                hours
              </p>
            </div>
            <div className="details-container">
              <div className="contacts">
                <div className="contact">
                  {PhoneIcon}
                  <p>
                    +260779293183, +260 97 3536566, +260 96 5240860,
                    +260974405943
                  </p>
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
          <div className="social-links">
            <Link>{FacebookIcon}</Link>
            <Link>{LinkedInIcon}</Link>
            <Link>{WhatsappIcon}</Link>
            <Link>{InstagramIcon}</Link>
            <Link>{TwitterIcon}</Link>
          </div>
        </div>
        <form className="contact-form">
          <label>
            First Name:
            <input
              type="text"
              placeholder="John"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              placeholder="Doe"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Phone Number:
            <input
              type="number"
              placeholder="+260-7792-93-183"
              value={phoneNumber}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </label>
          <div className="form-group">
            <label>
              Message:
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </label>
            <button type="submit" className="btn2">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
