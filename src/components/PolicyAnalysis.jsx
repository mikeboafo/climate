import React, { useState } from "react";

// Initial state
const initialState = {
  name: "",
  phone: "",
  email: "",
  amount: "",
  beneficiaryName: "",
  beneficiaryClass: "",
  beneficiaryHouse: "",
};

export const PolicyAnalysis = () => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // setFormData(initialState);
  };

  return (
    <>
      <div className="policy-analysis container py-5">
        <form onSubmit={handleSubmit}>
          {/* Donor's Information */}
          <section className="donors-information mb-5">
            <h3>Donor's Information:</h3>

            <div className="form-group mb-3">
              <label>
                Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter anonymous, if you would like to remain anonymous"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group mb-3">
              <label>
                Phone <span className="text-danger">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                className="form-control"
                required
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group mb-3">
              <label>
                Email <span className="text-danger">*</span>
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group mb-3">
              <label>
                Amount Pledged (GHS) <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="amount"
                className="form-control"
                placeholder="Enter amount"
                required
                value={formData.amount}
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^\d*\.?\d*$/.test(value)) {
                    setFormData((prevState) => ({
                      ...prevState,
                      amount: value,
                    }));
                  }
                }}
              />
            </div>
          </section>

          {/* Donating on Behalf Of */}
          <section className="donating-on-behalf-of mb-5">
            <h3>Donating on Behalf Of:</h3>

            <div className="form-group mb-3">
              <label>Name</label>
              <select
                name="beneficiaryName"
                className="form-control"
                value={formData.beneficiaryName}
                onChange={handleChange}
              >
                <option value="">-- Select Name --</option>
                <option value="Ama Boateng">Ama Boateng</option>
                <option value="Kwame Mensah">Kwame Mensah</option>
                <option value="Akosua Dede">Akosua Dede</option>
              </select>
            </div>

            <div className="form-group mb-3">
              <label>Class</label>
              <select
                name="beneficiaryClass"
                className="form-control"
                value={formData.beneficiaryClass}
                onChange={handleChange}
              >
                <option value="">-- Select Class --</option>
                <option value="Form 1">Form 1</option>
                <option value="Form 2">Form 2</option>
                <option value="Form 3">Form 3</option>
              </select>
            </div>

            <div className="form-group mb-3">
              <label>House</label>
              <select
                name="beneficiaryHouse"
                className="form-control"
                value={formData.beneficiaryHouse}
                onChange={handleChange}
              >
                <option value="">-- Select House --</option>
                <option value="Volta">Volta</option>
                <option value="Kwahu">Kwahu</option>
                <option value="Western">Western</option>
              </select>
            </div>
          </section>

          {/* Submit Button */}
          <button type="submit" className="btn btn-custom btn-lg mt-3">
            Make payment
          </button>
        </form>
      </div>

      {/* Footer */}
      <div id="footer" className="mt-5">
        <div className="container footer-content">
          <div className="footer-left">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-youtube"></i>
            </a>
          </div>
          <div className="footer-right">
            <div className="footer-links">
              <a href="#about">About</a>
              <a href="#terms">Terms & Conditions</a>
              <a href="#help">Help</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

