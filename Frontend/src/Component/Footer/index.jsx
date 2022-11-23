import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "./assets/icon.png";
import "./footer.style.scss";
import { BsInstagram, BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";
<<<<<<< HEAD:Frontend/src/Component/Footer/index.jsx
import { useEffect } from "react";
=======
>>>>>>> 00810070 (fix: fixed general styling):src/Component/Footer/index.jsx

const Footer = () => {
  const year = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (regex.test(email)) {
      setEmail("");
      setMessage("");
    } else if (!regex.test(email) && email !== "") {
      setMessage("Please enter a valid email");
    } else {
      return;
    }
  };

  const routePath = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [routePath]);

  return (
    <div id="footerId" className="footer">
      <div className="footer-container">
        <div className="footer-flex">
          <div className="footer-lists">
            <div className="list">
              <h2>company</h2>
              <Link to="/aboutUs" className="link">
                About
              </Link>
              <Link to="/contact-us" className="link">
                Contact
              </Link>
              <Link to="/team" className="link">
                Our team
              </Link>
            </div>
            <div className="list">
              <h2>product</h2>
              <Link to="/pricing" className="link">
                Pricing
              </Link>
              <Link to="/terms" className="link">
                Terms of Service
              </Link>
              <Link to="/privacy" className="link">
                Privacy Policy
              </Link>
            </div>
            <div className="list">
              <h2>resources</h2>
              <Link to="/templates" className="link">
                Templates
              </Link>
              <Link to="/career" className="link">
                Career
              </Link>
              <Link to="/FAQ" className="link">
                FAQs
              </Link>
            </div>
          </div>
          <div className="footer-form">
            <h3>Stay up to date with Product</h3>
            <form noValidate>
              <p className="error-msg">{message}</p>
              <div className="footer-input">
                <input
                  type="email"
                  placeholder="Your Email"
                  onChange={handleChange}
                  value={email}
                  name="name"
                  onClick={() => setMessage("")}
                />
                <button onClick={handleSubmit}>Subscribe</button>
              </div>
            </form>
          </div>
        </div>
        <div className="footer-info">
          <div className="footer-logo">
            <h2>
              Certify <img src={logo} alt="Certify logo" />
            </h2>
            <h3>info@Certify.com</h3>
          </div>
          <div className="footer-socials">
            <h3>We are social</h3>
            <div>
<<<<<<< HEAD:Frontend/src/Component/Footer/index.jsx
              <a
                href="https://instagram.com/hnginternship?igshid=YmMyMTA2M2Y="
                target="_blank"
              >
                <BsInstagram className="social" />
              </a>
              <a
                href="https://www.linkedin.com/m/company/hng-internship"
                target="_blank"
              >
                <BsLinkedin className="social" />
              </a>
              <a
                href="https://twitter.com/hnginternship?s=21&t=xpk379-T4b-GQ5_UAcEnsg"
                target="_blank"
              >
                <BsTwitter className="social" />
              </a>
              <a
                href="https://github.com/workshopapps/certificategenerator.web"
                target="_blank"
              >
                <BsGithub className="social" />
              </a>
=======
              <BsInstagram className="social" />
              <BsLinkedin className="social" />
              <BsTwitter className="social" />
              <BsGithub className="social" />
>>>>>>> 00810070 (fix: fixed general styling):src/Component/Footer/index.jsx
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright footer-container">
        <h3>
          &copy; Copyright {year}{" "}
          <span className="headlight-text">Team Headlight</span>. All rights
          reserved.
        </h3>
      </div>
    </div>
  );
};

export default Footer;
