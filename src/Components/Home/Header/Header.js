import React from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const Header = () => {
  return (
    <div className="hero min-h-screen text-white  ">
      <div className="hero-content  ">
        <div>
          <h3 className="text-2xl lg:text-5xl font-bold">
            {" "}
            RATUL <span className=" text-orange-700">ISLAM</span>
          </h3>
          <div className="mb-7">
            {" "}
            <div className="lg:py-6   ">
              <p> I' M </p>
              <TypeAnimation
                sequence={[
                  "Web Developer", // Types 'One'
                  1000, // Waits 1s
                  "Front-End Designer", // Deletes 'One' and types 'Two'
                  2000, // Waits 2s
                  "Students", // Types 'Three' without deleting 'Two'
                  1000,
                  () => {
                    console.log("Done typing!"); // Place optional callbacks anywhere in the array
                  },
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: "1em" }}
              />
            </div>
          </div>
          <Link to="/contactMe" className="">
            <button className="btn btn-glass hover:bg-orange-700  ">Get in Touch</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
