import React from 'react'
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center">
        Welcome to Amaris Kitchen Store!

At Amaris Kitchen Store, we believe that a well-equipped kitchen is the heart of every home. Nestled in the vibrant state of Kerala, India, our store is your ultimate destination for all your kitchen needs. Whether you're a seasoned chef or a passionate home cook, we offer a diverse range of high-quality kitchen appliances and utensils to elevate your culinary experience.

Explore our extensive collection featuring leading brands from around the world. From sleek and modern to classic and timeless designs, we curate products that cater to every style and preference. Whether you're in search of state-of-the-art kitchen gadgets, durable cookware, or efficient appliances, we have you covered.

Our team of knowledgeable and friendly staff is committed to providing personalized assistance to help you find the perfect products for your culinary endeavors. We understand that every kitchen is unique, and we strive to offer tailored solutions to meet your specific requirements.

At Amaris Kitchen Store, we prioritize customer satisfaction above all else. We stand behind the quality of our products and take pride in offering competitive prices to ensure that you receive the best value for your investment.

Visit us today and embark on a journey to transform your kitchen into a culinary haven. Whether you're seeking inspiration, innovation, or simply the joy of cooking, Amaris Kitchen Store is here to make your culinary dreams a reality. Experience the difference with us  where quality meets excellence, and every meal becomes a masterpiece.
        </p>

        <h2 className="text-center py-4">Our Products</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/2002429/pexels-photo-2002429.jpeg?auto=compress&cs=tinysrgb&w=400&h=750&dpr=1" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Cutlery</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/2868977/pexels-photo-2868977.jpeg?auto=compress&cs=tinysrgb&w=400&h=750&dpr=1" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Utensils</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/1148450/pexels-photo-1148450.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Glasswares</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/211761/pexels-photo-211761.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Appliances</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage