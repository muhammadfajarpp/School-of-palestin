// src/Home.js
import React from 'react';
import './home.css'; // Optional: Custom CSS

const Home = () => {
  return (
    <div>
      {/* Header */}
      {/* <header className="bg-dark text-white text-center py-5 ">
        <h1 class="fst-italic" >Welcome to School of Palestina</h1>          
        <p class="fw-lighter">Building Future Leaders in Palestin</p>
      </header> */}

      {/*backround img*/}
      <div className="container-fluid h-100">
        <div className="row h-100">
          <div className="col-12">
            <div
              className="bg"
              style={{
                backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/a/af/East_Palestine_High_School.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                margin: "25px 50px;"
              }}
            >
              <div className="d-flex flex-column justify-content-center align-items-center h-100 text-center text-white">
                <p className="display-2" style={{ fontWeight: 'bold', color: 'white' }}>
                  FREE & ACCESSIBLE
                </p>
                <h1 className="display-6" style={{ fontWeight: 'bold', color: 'White' }}>
                  'EDUCATION FOR ALL'
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* //card/* */}

      <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
            {/* First Image with Overlay Text */}
            <div style={{ position: 'relative', margin: '25px' }}>
                <img
                    src="https://theirworld.org/wp-content/uploads/2018/01/UNRWA-provides-primary-schooling-for-thousands-of-Palestinian-children.jpg" // Replace with your image URL
                    alt="Image 1"
                    style={{ width: '90%', height: '500px', borderRadius: '0px' }} // Adjust styles as needed
                />
                <div 
                    style={{
                        position: 'absolute', 
                        top: '20%', 
                        left: '50%', 
                        transform: 'translate(-50%, -20%)', // Adjust position
                        color: 'white',
                        textAlign: 'center',
                        fontSize: '1.5rem', // Text size
                        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
                        padding: '10px', // Padding around text
                        borderRadius: '5px', // Rounded corners
                    }}
                >
                    <h5 >Be Creative!</h5>
                    <p>Express Yourself</p>
                </div>
            </div>

            {/* Second Image with Overlay Text */}
            <div style={{ position: 'relative', margin: '25px' }}>
                <img
                    src="https://static.timesofisrael.com/www/uploads/2018/09/AP18261452801948-e1537421987303.jpg" // Replace with your image URL
                    alt="Image 2"
                    style={{ width: '102%', height: '500px', borderRadius: '0px' }} // Adjust styles as needed
                />
                <div 
                    style={{
                        position: 'absolute', 
                        top: '20%', 
                        left: '50%', 
                        transform: 'translate(-50%, -20%)', // Adjust position
                        color: 'white',
                        textAlign: 'center',
                        fontSize: '1.5rem', // Text size
                        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
                        padding: '10px', // Padding around text
                        borderRadius: '5px', // Rounded corners
                    }}
                >
                    <h5>Explore Your Ideas!</h5>
                    <p>Let Creativity Flow</p>
                </div>
            </div>
        </div>


        














    </div>
  );
};

export default Home;
