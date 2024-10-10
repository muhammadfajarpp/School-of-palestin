import React from 'react';

// Sample images (You can replace these with your actual image URLs)
const images = {
  bca: 'https://via.placeholder.com/300x200?text=BCA+Course', // Replace with actual image URL
  bba: 'https://via.placeholder.com/300x200?text=BBA+Course', // Replace with actual image URL
  ba: 'https://via.placeholder.com/300x200?text=BA+Course',   // Replace with actual image URL
};

const coursesData = [
  {
    title: 'Bachelor of Computer Applications (BCA)',
    description: 'A comprehensive program focusing on computer applications and programming skills.',
    image: images.bca,
  },
  {
    title: 'Bachelor of Business Administration (BBA)',
    description: 'A program designed to develop skills in business management and administration.',
    image: images.bba,
  },
  {
    title: 'Bachelor of Arts (BA)',
    description: 'A versatile program offering a broad understanding of arts and humanities.',
    image: images.ba,
  },
];

const Courses = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Courses Offered</h2>
      <div className="row">
        {coursesData.map((course, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card">
              <img src={course.image} className="card-img-top" alt={course.title} />
              <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">{course.description}</p>
                <a href="#" className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
