import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [statusMessage, setStatusMessage] = useState("");

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.subject) newErrors.subject = "Subject is required";
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
  };

  return (
    <div className="contact-form-container">
      <h2>Send me a message</h2>
      <p>
        Feel free to get in touch with me with anything related to CODINGSPACE
        or you can just say hi. I will get back to you as soon as I can.
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <span className="error">{errors.name}</span>}

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span className="error">{errors.email}</span>}

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
        />
        {errors.subject && <span className="error">{errors.subject}</span>}

        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        {errors.message && <span className="error">{errors.message}</span>}

        <button type="submit">Send</button>
      </form>
      {statusMessage && <p className="status-message">{statusMessage}</p>}
    </div>
  );
}
