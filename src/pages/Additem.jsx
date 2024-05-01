import React, { useState } from 'react';
import { Footer, Navbar } from "../components";
import supabase from '../components/supabaseClient';


const Additem = () => {
    const [itemTitle, setItemTitle] = useState('');
    const [itemDescription, setItemDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');
    const [rating, setRating] = useState('');
    const [error, setError] = useState(null);
    const [itemNames, setItemNames] = useState([]);

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

    const handleLoadingItems = async (event) => {
        event.preventDefault();

        try {
            const { data, error } = await supabase
                .from('ITEM_TABLE')
                .select('item_name');

            if (error) {
                throw error;
            }

            // Extract item names from the data array
            const itemNames = data.map(item => item.item_name);
            console.log(itemNames);
            // Set the item names state
            setItemNames(itemNames);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <>
            <Navbar />
            <div className="container my-3 py-3">
                <h1 className="text-center">Add Items</h1>

                <div className="row my-4 h-100">
                    <div className="col-md-4 col-lg-10 col-sm-8 mx-auto">
                        <form onSubmit={handleSubmit}>
                            <div className="my-3">
                                <label htmlFor="titleInput">Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="title"
                                    placeholder="eg: Pigeon Set of 15 Spoons"
                                    value={itemTitle}
                                    onChange={(e) => setItemTitle(e.target.value)}
                                />
                            </div>
                            <div className="my-3">
                                <label htmlFor="descriptionInput">Description</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="description"
                                    placeholder="eg: This product is ..."
                                    value={itemDescription}
                                    onChange={(e) => setItemDescription(e.target.value)}
                                />
                            </div>
                            <div className="my-3">
                                <label htmlFor="categoryInput">Category</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="category"
                                    placeholder="eg: Appliance"
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                />
                            </div>
                            <div className="my-3">
                                <label htmlFor="priceInput">Price</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="price"
                                    placeholder=""
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                            </div>
                            <div className="my-3">
                                <label htmlFor="imageInput">Image</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="image"
                                    placeholder="eg: https://photos.com/kitchenspoon.jpg"
                                    value={image}
                                    onChange={(e) => setImage(e.target.value)}
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

                <h2>Delete Items</h2>
                <button className="my-2 mx-auto btn btn-dark" type="submit" onClick={handleLoadingItems}>
                    Fetch items
                </button>

                <h2>Item Names</h2>
                <table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Item Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {itemNames.map((itemName, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{itemName}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
            <Footer />
        </>
    );
};

export default Additem;
