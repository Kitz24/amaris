import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import supabase from '../components/supabaseClient';
import { Navbar, Footer } from "../components";
import { useNavigate } from 'react-router-dom';
import { SessionContext } from '../SessionContext'; // Import 

function ForgotPass() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const { session, setSession } = useContext(SessionContext); // Destructure session context
    const [signedOut, setSignedOut] = useState(false);
    const navigate = useNavigate();  

    useEffect(() => {
      supabase.auth.onAuthStateChange(async (event, session) => {
        if (event == "PASSWORD_RECOVERY") {
          const newPassword = prompt("What would you like your new password to be?");
          const { data, error } = await supabase.auth
            .updateUser({ password: newPassword })
   
          if (data) alert("Password updated successfully!")
          if (error) alert("There was an error updating your password.")
        }
      })
      }, []);


    const handleForgotPass = async (event) => {
        event.preventDefault();
    
        try {

            const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
                redirectTo: 'https://amaris-azure.vercel.app/resetpass',
              })
                          if (error) {
                throw error;
            } else {
                alert('Check your Email for Resetting Password');
            }
        } catch (error) {
            setError(error.message);
        }
    };
    


    return(
        <div>
        <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Password Reset</h1>
        <hr />
        <div className="text-center"> 
          {error && <div>{error}</div>}
        </div>
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form>
              <div className="my-3">
                <label htmlFor="emailInput">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="emailInput"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="text-center">
                <button className="my-2 mx-auto btn btn-dark" type="submit" onClick={(e) => handleForgotPass(e)}>
                  Submit
                </button>
                
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
        </div>
);
}

export default ForgotPass;
