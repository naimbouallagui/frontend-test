import React, { useState } from "react";
import HeadComponent from "./HeadComponent";

const ContactUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        

    }
  return (
    <>
      <section className="d-flex flex-wrap align-content-space-evenly w-100 bg-dark-grey">
        <HeadComponent />
        <div className="break-flex"></div>
        <div className="d-block m-auto col-4" style={{ minWidth: "551px" }}>
          <div className=" p-4 text-center">
            <h3 className="text-white">
              Let's talk about our project
            </h3>
          </div>
        </div>
        <div className="break-flex"></div>
        <div className="d-block ">
        <form className="form-contact" onSubmit={handleSubmit}>
                <input
                    onChange={e => setName(e.target.value)}
                    type="text"
                    id="inputName"
                    className="form-control"
                    placeholder="name"
                    required=""
                    autoFocus=""
                />
                 <input
                    onChange={e => setEmail(e.target.value)}
                    type="text"
                    id="inputEmail"
                    className="form-control"
                    placeholder="email"
                    required=""
                    autoFocus=""
                />
                 <input
                    onChange={e => setCompany(e.target.value)}
                    type="text"
                    id="inputCompany"
                    className="form-control"
                    placeholder="company"
                    required=""
                    autoFocus=""
                />
                <input
                    onChange={e => setSubject(e.target.value)}
                    type="text"
                    id="inputCubject"
                    className="form-control"
                    placeholder="subject"
                    required=""
                    autoFocus=""
                />
                <input
                    onChange={e => setMessage(e.target.value)}
                    type="text"
                    id="inputMessage"
                    className="form-control"
                    placeholder="message"
                    required=""
                    autoFocus=""
                />

                <button className="btn btn-lg btn-primary btn-block mt-3" type="submit">GET IN TOUCH</button>
            </form>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
