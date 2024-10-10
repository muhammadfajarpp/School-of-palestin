import React from 'react';

const AboutUs = () => {
  return (
    <section className="about-us bg-light py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 className="mb-4">About Our School</h2>
            <p>
              Our school in Palestine is dedicated to fostering a learning environment that promotes
              academic excellence, creativity, and the values of community and leadership. With a rich
              history of educational achievements, we empower students to excel and become active
              participants in their society.
            </p>
            <p>
              We provide a safe and nurturing environment where students can thrive academically,
              socially, and emotionally. Our dedicated faculty and staff work hand in hand with families
              and the community to build a brighter future for Palestine.
            </p>
            <p>
              Join us in our mission to cultivate the leaders of tomorrow and create opportunities for
              every child to reach their full potential.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="https://theirworld.org/wp-content/uploads/2018/02/Palestinian-children-at-a-school-run-by-UNRWA-in-Gaza.jpg"
              alt="School Campus"
              className="img-fluid mb-3"
            />
            <img
              src="https://www.ochaopt.org/sites/default/files/images/articles/UNICEF%20children_0.PNG"
              alt="Students in class"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
