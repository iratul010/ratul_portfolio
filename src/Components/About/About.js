import React from "react";
import profile from "../../assets/img/profile.jpg";
const About = () => {
  return (
    <div className="min-h-screen">
      <h2 className="text-center text-white  text-2xl py-4">ABOUT ME</h2>
      <div className="hero    text-white ">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10">
          <img src={profile} className="max-w-sm rounded-lg" alt="phone" />

          <div className="w-1/2 max-auto">
            <h1 className="text-2xl lg:text-5xl font-bold">
              RATUL <span className="text-orange-700 font-bold">ISLAM</span>
            </h1>
            <p className="py-6  " style={{ color: "#484848" }}>
              My name is <span className="text-white">Ratul Islam</span> . I am a Web Designer, and I'm very passionate and
              dedicated to my work. With 2 years experience as a Web Designer, I have acquired the skills and knowledge. I am
              studying in the CSE Department of Green University & Undergoing for 11th Semesters.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
