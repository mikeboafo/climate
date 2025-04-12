import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};

export const PolicyAnalysis = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_PUBLIC_KEY")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="col-md-3 col-md-offset-1 contact-info">
  <div className="contact-item">
    <h3 className="text-xl font-semibold mb-4 text-white">Contact Info</h3>

    <p className="mb-4">
      <span className="flex items-center mb-1 text-white">
        <i className="fa fa-map-marker mr-2" aria-hidden="true"></i>
        Address
      </span>
      <span className="text-gray-300">
        {props.data?.address || "No address available"}
      </span>
    </p>

    <p className="mb-4">
      <span className="flex items-center mb-1 text-white">
        <i className="fa fa-phone mr-2" aria-hidden="true"></i>
        Phone
      </span>
      {props.data?.phone ? (
        <a
          href={`tel:${props.data.phone}`}
          className="text-blue-300 hover:underline"
          aria-label="Phone Number"
        >
          {props.data.phone}
        </a>
      ) : (
        <span className="text-gray-300">No phone available</span>
      )}
    </p>

    <p className="mb-4">
      <span className="flex items-center mb-1 text-white">
        <i className="fa fa-envelope-o mr-2" aria-hidden="true"></i>
        Email
      </span>
      {props.data?.email ? (
        <a
          href={`mailto:${props.data.email}`}
          className="text-blue-300 hover:underline"
          aria-label="Email Address"
        >
          {props.data.email}
        </a>
      ) : (
        <span className="text-gray-300"> climateafricadoelawson@gmail.com</span>
      )}
    </p>
  </div>
</div>




          {/* Email icon with mailto link */}
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={`mailto:${props.data ? props.data.email : "climateafricadoelawson@gmail.com"}`}>
                      <i className="fa fa-envelope"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2025 Climate Africa. Design by{" Michael Boafo "}
          </p>
        </div>
      </div>
    </div>
  );
};


