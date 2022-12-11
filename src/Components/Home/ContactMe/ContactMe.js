import React from "react";
import { FaEnvelope, FaFacebookSquare, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(`service_myngl0e`, `template_9bh0hq5`, form.current, `Ir0y_kP2VjqWFicn2`).then(
      (result) => {
        console.log(result.text);
        e.target.reset();
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  const details = [
    {
      sticker: <FaMapMarkerAlt />,
      contactWay: "Mirpur Share-11, Dhaka",
    },
    {
      sticker: <FaPhone />,
      contactWay: "+8801650095373",
    },
    {
      sticker: <FaEnvelope />,
      contactWay: "iratul010@gmail.com",
    },
    {
      sticker: <FaFacebookSquare />,
      contactWay: "https://www.facebook.com/ratulislamweb/",
    },
  ];
  return (
    <div className="min-h-screen mx-auto">
      <h2 className="text-center text-white text-2xl py-14">
        GET IN <span className="text-orange-700">TOUCH</span>
      </h2>

      <div>
        {/* bg-base-200 */}

        <div className="hero-content flex-col lg:flex-row-reverse ">
          <div className="text-center lg:text-left   max-auto  ">
            <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 gap-4">
              <input type="text" name="user_name" placeholder="Name" className="bg-base-200 p-4  w-100" />

              <input type="email" name="user_email" placeholder="Email" className="bg-base-200 p-4" />

              <textarea name="message" className="bg-base-200 p-3" placeholder="message" />
              <input type="submit" value="SUBMIT" className="btn btn-glass hover:bg-orange-700 " />
            </form>
          </div>
          <div className="card flex-shrink-0   shadow-2xl   max-auto">
            <div className="card-body w-full">
              {details.map((detail, i) => (
                <div className="flex flex-row gap-4 items-center justify-start bg-base-200 p-5 rounded" key={i}>
                  <span>{detail.sticker}</span>
                  <span>
                    <a href={detail.contactWay}>{detail.contactWay}</a>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
