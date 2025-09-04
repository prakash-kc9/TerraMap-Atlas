import React from "react";

const Contact = () => {
  const handleFormSubmit = (formData) => {
    const formInputData = Object.fromEntries(formData.entries());
    // In a real application, you would send this data to a server here.
    console.log(formInputData);
  };

  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>
      <div className="contact-wrapper container">
        <form action={handleFormSubmit}>
          <input
            type="text"
            required
            autoComplete="off"
            placeholder="Enter your Name"
            name="username"
            className="form-control"
          />
          <input
            type="email"
            required
            className="form-control"
            autoComplete="off"
            placeholder="Enter your MailID"
            name="email"
          />
          <textarea
            className="form-control"
            rows="10"
            placeholder="Enter your message"
            name="message"
            required
            autoComplete="off"
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;