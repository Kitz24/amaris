import React, { useState } from 'react';
import { Footer, Navbar } from "../components";


const Additem = () => {
  const [itemTitle, setItemTitle] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    // For example, send the form data to a backend API
    const formData = {
      itemTitle,
      itemDescription,
      price,
      category,
      image,
      rating,
    };
    console.log(formData);
    // Reset form fields after submission
    setItemTitle('');
    setItemDescription('');
    setPrice('');
    setCategory('');
    setImage('');
    setRating('');
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Add Items</h1>
        
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-10 col-sm-8 mx-auto">
            <form action={{handleSubmit}}>
              <div className="my-3">
                <label htmlFor="titleInput">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  placeholder="eg: Pigeon Set of 15 Spoons"
                />
              </div>
              <div className="my-3">
                <label htmlFor="descriptionInput">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  placeholder="eg: This product is ..."
                />
              </div>
              <div className="my-3">
                <label htmlFor="categoryInput">Category</label>
                <input
                  type="text"
                  className="form-control"
                  id="category"
                  placeholder="eg: Appliance"
                />
              </div>
              <div className="my-3">
                <label htmlFor="priceInput">Price</label>
                <input
                  type="number"
                  className="form-control"
                  id="price"
                  placeholder=""
                />
              </div>
              <div className="my-3">
                <label htmlFor="imageInput">Image</label>
                <input
                  type="text"
                  className="form-control"
                  id="image"
                  placeholder="eg: https://photos.com/kitchenspoon.jpg"
                />
              </div>
              <div className="my-3">
              </div>
              <div className="text-center">
                <button className="my-2 mx-auto btn btn-dark" type="submit">
                  Add Item
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Additem;
