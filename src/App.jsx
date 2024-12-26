import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    mobile: "",
    email: "",
    gender: "",
    dob: "",
    course: "",
  });

  const [error, setError] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.address) errors.address = "Address is required";
    if (!formData.mobile || !/^\d{10}$/.test(formData.mobile))
      errors.mobile = "Valid 10-digit mobile number is required";
    if (
      !formData.email ||
      !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(formData.email)
    )
      errors.email = "Valid email is required";
    if (!formData.gender) errors.gender = "Gender is required";
    if (!formData.dob) errors.dob = "Date of Birth is required";
    if (!formData.course) errors.course = "Course selection is required";

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      alert(`Data Stored Successfully!\n${JSON.stringify(formData, null, 2)}`);
      setFormData({
        name: "",
        address: "",
        mobile: "",
        email: "",
        gender: "",
        dob: "",
        course: "",
      });
    } else {
      setError(errors);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      address: "",
      mobile: "",
      email: "",
      gender: "",
      dob: "",
      course: "",
    });
    setError({});
  };

  return (
    <div className="app">
      <h1>Higher Secondary Admission Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          {error.name && <small>{error.name}</small>}
        </div>

        <div className="form-group">
          <label>Address:</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
          {error.address && <small>{error.address}</small>}
        </div>

        <div className="form-group">
          <label>Mobile:</label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleInputChange}
          />
          {error.mobile && <small>{error.mobile}</small>}
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {error.email && <small>{error.email}</small>}
        </div>

        <div className="form-group">
          <label>Gender:</label>
          <div>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleInputChange}
            />
            Male
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={handleInputChange}
            />
            Female
          </div>
          {error.gender && <small>{error.gender}</small>}
        </div>

        <div className="form-group">
          <label>Date of Birth:</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleInputChange}
          />
          {error.dob && <small>{error.dob}</small>}
        </div>

        <div className="form-group">
          <label>Course:</label>
          <select
            name="course"
            value={formData.course}
            onChange={handleInputChange}
          >
            <option value="">Select a course</option>
            <option value="Biology">Biology</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Commerce">Commerce</option>
            <option value="Humanities">Humanities</option>
          </select>
          {error.course && <small>{error.course}</small>}
        </div>

        <div className="form-buttons">
          <button type="submit">Register</button>
          <button type="button" onClick={handleReset}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
