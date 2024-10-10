import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Contact Us</h1>
      <div className="row">
        <div className="col-md-6">
          <h3>Get in Touch</h3>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" id="message" rows="4" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
        <div className="col-md-6">
          <h3>Our Location</h3>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtHyamVPCYuWbAoxCnuMWBaaRKCrNt0ZI46Q&s"
            alt="School Location"
            className="img-fluid mb-3"
          />
          <p>
            Address: Al-Muqataa, Ramallah, Palestine
          </p>
          <p>
            Phone: +970 2 123 4567
          </p>
          <p>
            Email: contact@schoolname.ps
          </p>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtHyamVPCYuWbAoxCnuMWBaaRKCrNt0ZI46Q&s"
            alt="School Building"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
