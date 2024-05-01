import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { SessionContext } from '../SessionContext';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import supabase from '../components/supabaseClient';

const Navbar = () => {
    const state = useSelector(state => state.handleCart);
    const [admin, setAdmin] = useState(false);
    const [user, setUser] = useState(false);
    const { session, setSession } = useContext(SessionContext); // Destructure session context


    useEffect(() => {
        const authListener = supabase.auth.onAuthStateChange((event, session) => {
        

            if (session !== null) {
                setUser(true);
                if (session.user.email === 'kittusroad@gmail.com') {
                    setAdmin(true);
                } else {
                    setAdmin(false);
                }
            }
        });

        // Unsubscribe from the auth listener when component unmounts
        return () => {
            authListener.data.subscription.unsubscribe();
        };
    }, []);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
            <div className="container">
                <NavLink className="navbar-brand fw-bold fs-1 px-2" to="/"> Amaris Stores</NavLink>
                <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto my-2 text-center">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/product">Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                    <div className="buttons text-center">
                        {user && <NavLink to="/profile" className="btn btn-outline-dark m-2"><i className="fa fa-sign-in-alt mr-1"></i> Profile</NavLink> }
                        {!user && <NavLink to="/login" className="btn btn-outline-dark m-2"><i className="fa fa-sign-in-alt mr-1"></i> Login</NavLink>}
                        {!user && <NavLink to="/register" className="btn btn-outline-dark m-2"><i className="fa fa-user-plus mr-1"></i> Register</NavLink>}
                        <NavLink to="/cart" className="btn btn-outline-dark m-2"><i className="fa fa-cart-shopping mr-1"></i> Cart ({state.length}) </NavLink>
                        {admin && <NavLink to="/additem" className="btn btn-outline-dark m-2"><i className="fa fa-user-plus mr-1"></i> Admin Space</NavLink>}

                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
