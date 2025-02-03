import React, { useState } from "react";
import toast from "react-hot-toast";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const API_URL = "https://api.web3forms.com/submit";
  const ACCESS_KEY = "4b8bfd01-dd17-4f7d-8bbc-5879710e7dc0";

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

    toast.loading("Sending your message...", {
      style: {
        background: "#1E1E1E",
        color: "#fff",
        borderRadius: "8px",
        padding: "12px",
      },
      duration: 2000,
    });

    const formData = new FormData(e.target);
    formData.append("access_key", ACCESS_KEY);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast.success("Message sent successfully!", {
          style: {
            background: "#fff",
            color: "#28a745",
            borderRadius: "8px",
            border: "2px solid #28a745",
            padding: "12px",
          },
          icon: "✅",
          duration: 5000,
        });
        e.target.reset();
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error(data.message || "Failed to send message.", {
          style: {
            background: "#fff",
            color: "#dc3545",
            borderRadius: "8px",
            border: "2px solid #dc3545",
            padding: "12px",
          },
          icon: "❌",
          duration: 5000,
        });
      }
    } catch (error) {
      console.error("Fetch error:", error);
      toast.error("An error occurred. Please try again.", {
        style: {
          background: "#fff",
          color: "#000",
          borderRadius: "8px",
          border: "2px solid #dc3545",
          padding: "12px",
        },
        icon: "⚠️",
        duration: 5000,
      });
    }
  };

  return (
    <div className="contact-form-container">
      <h2>Send me a message</h2>
      <p>
        Have a question, a collaboration idea, or any feedback? Feel free to get
        in touch with me. Drop a message, and I'll get back to you as soon as
        possible.
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className={errors.name ? "error" : ""}
        />
        {errors.name && <span className="error">{errors.name}</span>}

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? "error" : ""}
        />
        {errors.email && <span className="error">{errors.email}</span>}

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className={errors.subject ? "error" : ""}
        />
        {errors.subject && <span className="error">{errors.subject}</span>}

        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className={errors.message ? "error" : ""}
        ></textarea>
        {errors.message && <span className="error">{errors.message}</span>}

        <button type="submit">Send</button>
      </form>
    </div>
  );
}
