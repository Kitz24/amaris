import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import supabase from '../components/supabaseClient';
import { Navbar, Footer } from "../components";
import { useNavigate } from 'react-router-dom';
import { SessionContext } from '../SessionContext'; // Import SessionContext as named export



const Orders = () => {
    const navigate = useNavigate();
    const [itemNames, setItemNames] = useState([]);
    const [itemQuantity, setItemQuantity] = useState([]);

    const handleOrder = async (event) => {
        
    
        const { data, error } = await supabase
        .from('ORDER_TABLE')
        .select();
        const itemNames = data.map(item => item.item_name);
        const itemQuantity = data.map(item => item.quantity);
        setItemNames(itemNames);
        setItemQuantity(itemQuantity);
        }

    return (
        <>
            <Navbar />
            <div className="container my-3 py-3">
                <h1 className="text-center">Order Placed</h1>

                <div className="row my-4 h-100">
                    <div className="col-md-4 col-lg-10 col-sm-8 mx-auto">
                        
                    </div>
                </div>

                <button className="my-2 mx-auto btn btn-dark" type="submit" onClick={handleOrder()}>
                    Fetch items
                </button >

                <h2>Item Names</h2>
                <table striped bordered hover>
  <thead>
    <tr>
      <th colSpan="3">Item details</th>
    </tr>
    <tr>
      <th>#</th>
      <th>Item Name</th>
      <th>Quantity</th>
    </tr>
  </thead>
  <tbody>
    {itemNames.map((itemName, index) => (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{itemName}</td>
        <td>{itemQuantity[index]}</td>
      </tr>
    ))}
  </tbody>
</table>

                

            </div>
            <Footer />
        </>
    );
};

export default Orders;
