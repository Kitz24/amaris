import React from "react";
import { Footer, Navbar } from "../components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { SessionContext } from "../SessionContext";
import { useState } from "react";
import supabase from '../components/supabaseClient'; // Import supabase client
import { useNavigate } from "react-router-dom";


const Checkout = () => {
  const state = useSelector((state) => state.handleCart);
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState("");
  
  const [address, setAddress] = useState("");
  const [address2, setAddress2] = useState("");
  const [country, setCountry] = useState("");
  const [zip, setZip] = useState("");
  const [ccName, setCcName] = useState("");
  const [ccNumber, setCcNumber] = useState("");
  const [ccExpiration, setCcExpiration] = useState("");
  const [ccCvv, setCcCvv] = useState("");


  const EmptyCart = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 py-5 bg-light text-center">
            <h4 className="p-3 display-5">No item in Cart</h4>
            <Link to="/" className="btn btn-outline-dark mx-4">
              <i className="fa fa-arrow-left"></i> Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //const storedSession = localStorage.getItem('session');
    // Do something with the form data, such as sending it to a server or processing it locally
    
  
    
      // // Log all form data to the console
      // console.log("First Name:", firstName);
      // console.log("Last Name:", lastName);
      // console.log("Address:", address);
      // //console.log("email: ", session.email);
      // console.log("Address 2:", address2);
      // console.log("Country:", country);
      // console.log("Zip:", zip);
      // console.log("Credit Card Name:", ccName);
      // console.log("Credit Card Number:", ccNumber);
      // console.log("Credit Card Expiration:", ccExpiration);
      // console.log("Credit Card CVV:", ccCvv);


      state.map((item) => {
        console.log(item.price);
      });

      state.map((item) => {
        console.log(item.qty);
      });
      console.log(Date.now());

      const itemPrices = state.map((item) => item.price);


            
     
      // const { error } = await supabase
//   .from('ORDER_TABLE')
//   .insert({
//     item_id: state.map((item) => (item.id)), // Convert item.id to integers
//     status: 'Ordered',
//     user_email: 'a@g.com',
//     quantity: state.map((item) => item.qty[0]),
//     order_date: '5:2:2024'
//   });
// console.log(error);
// Assuming state is an array of items with properties like id, price, etc.








state.forEach(async (item) => {
  const { error } = await supabase
    .from('ORDER_TABLE')
    .insert({
      item_id: item.id,
      item_price: item.price,
      item_name: item.title,
      status: 'Ordered',
      user_email: 'a@g.com',
      quantity: item.qty,
      order_date: '5:2:2024'
      // Other columns and values you want to insert for each item
    });
  
  if (error) {
    console.error('Error inserting item:', error);
  }
  navigate('/order')
});

// const { error } = await supabase.from('ORDER_TABLE').delete().eq('item_id', '2');;
// console.log(error);
          
      // Now you
  };


  const ShowCheckout = () => {
    let subtotal = 0;
    let shipping = 30.0;
    let totalItems = 0;
    state.map((item) => {
      return (subtotal += item.price * item.qty);
    });

    state.map((item) => {
      return (totalItems += item.qty);
    });
    return (
      <>
        <div className="container py-5">
          <div className="row my-4">
            <div className="col-md-5 col-lg-4 order-md-last">
              <div className="card mb-4">
                <div className="card-header py-3 bg-light">
                  <h5 className="mb-0">Order Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Products ({totalItems})<span>₹{Math.round(subtotal)}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Shipping
                      <span>₹{shipping}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                      </div>
                      <span>
                        <strong>₹{Math.round(subtotal + shipping)}</strong>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
              <div className="col-md-7 col-lg-8">
                <div className="card mb-4">
                  <div className="card-header py-3">
                    <h4 className="mb-0">Billing address</h4>
                  </div>
                  <div className="card-body">
                    <form >
                      <div className="row g-3">
                        <div className="col-sm-6 my-1">
                          <label htmlFor="firstName" className="form-label">
                            First name
                          </label>
                          <input
                              type="text"
                              className="form-control"
                              id="firstName"
                              value={firstName}
                              onChange={(e) => setFirstName(e.target.value)}
                              
                            />
                          
                        </div>

                        <div className="col-sm-6 my-1">
                          <label for="lastName" className="form-label">
                            Last name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="lastName"
                            value={lastName}
                            placeholder=""
                            onChange={(e) => setLastName(e.target.value)}
                          />
                          <div className="invalid-feedback">
                            Valid last name is required.
                          </div>
                        </div>

                      

                        <div className="col-12 my-1">
                          <label for="address" className="form-label">
                            Address
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="address"
                            value={address}
                            placeholder="1234 Main St"
                            onChange={(e) => setAddress(e.target.value)}
                            required
                          />
                          <div className="invalid-feedback">
                            Please enter your shipping address.
                          </div>
                        </div>

                        <div className="col-12">
                          <label for="address2" className="form-label">
                            Address 2{" "}
                            <span className="text-muted">(Optional)</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="address2"
                            value={address2}
                            onChange={(e) => setAddress2(e.target.value)}
                            placeholder="Apartment or suite"
                          />
                        </div>

                        

                        <div className="col-md-3 my-1">
                          <label for="zip" className="form-label">
                            Zip
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="zip"
                            placeholder=""
                            value={zip}
                            onChange={(e) => setZip(e.target.value)}

                            required
                          />
                          <div className="invalid-feedback">
                            Zip code required.
                          </div>
                        </div>
                      </div>

                      <hr className="my-4" />

            

                      

                      <button
                        className="w-100 btn btn-primary "
                        type="submit" onClick={handleSubmit}
                      >
                        Continue to checkout
                      </button>
                    </form>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Checkout</h1>
        <hr />
        {state.length ? <ShowCheckout /> : <EmptyCart />}
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
