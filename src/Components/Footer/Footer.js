import React from "react";
import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10   text-base-content rounded">
      <div className="grid grid-flow-col gap-4">
        <Link to="" className="link link-hover">
          About Me
        </Link>
        <Link to="" className="link link-hover">
          Contact
        </Link>
        <Link to="" className="link link-hover">
          Jobs
        </Link>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <a href="https://www.facebook.com/ratulislamweb">
            {" "}
            <span>
              <FaFacebookSquare />
            </span>
          </a>
          <a href="https://github.com/iratul010">
            <span>
              <FaGithub />
            </span>
          </a>
          <a href="https://www.linkedin.com/in/ratul-islam-19545618b/">
            <span>
              <FaLinkedin />
            </span>
          </a>
        </div>
      </div>
      <div>
        <p>Copyright © 2022 - Ratul Islam</p>
      </div>
    </footer>
  );
};

export default Footer;
