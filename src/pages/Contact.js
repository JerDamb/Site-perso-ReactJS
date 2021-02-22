import React from "react";
import Form from "../components/contact/Form";
import Navigation from "../components/Navigation";

const Contact = () => {
  return (
    <div className="contactContent">
      <span className="text-bg">Contact</span>
      <div className="halfBackground"></div>
      <div className="contact">
        <Navigation />
        <Form />
      </div>
    </div>
  );
};

export default Contact;
