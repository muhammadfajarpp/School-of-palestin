import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-info text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>About Us</h5>
            <p>
              This is a poratta company providing delicious, fresh porattas made from the finest ingredients.
            </p>
          </div>
          <div className="col-md-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Home</a></li>
              <li><a href="#" className="text-white">Menu</a></li>
              <li><a href="#" className="text-white">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Facebook</a></li>
              <li><a href="#" className="text-white">Instagram</a></li>
              <li><a href="#" className="text-white">Twitter</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-4">
          <p>&copy; {new Date().getFullYear()} SCHOOL PALESTIN All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
