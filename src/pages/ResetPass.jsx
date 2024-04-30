import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import supabase from '../components/supabaseClient';
import { Navbar, Footer } from "../components";
import { useNavigate } from 'react-router-dom';
import { SessionContext } from '../SessionContext'; // Import 

function ResetPass() {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const { token } = useParams(); // Extract token from URL
    const StoredSession = localStorage.getItem('session');
    const session = StoredSession.user.email; // Destructure session context



    useEffect(() => {
        supabase.auth.onAuthStateChange(async (event, session) => {
          if (event === "PASSWORD_RECOVERY") {
            const newPassword = prompt("What would you like your new password to be?");
            const { data, error } = await supabase.auth
              .updateUser({ password: newPassword })
     
            if (data) alert("Password updated successfully!")
            if (error) alert("There was an error updating your password.")
          }
        })
      }, [])

    const handlePasswordReset = async (event) => {
    event.preventDefault();

    try {
      setEmail(session);
      const { error } = await supabase.auth.updateUser( {email, password });
      if (error) {
        throw error;
      }
      // Password reset successful, redirect to login page or display success message
      alert('Password reset successful. You can now login with your new password.');
      // Redirect to login page
    } catch (error) {
      setError(error.message);
    }
  }


    return(
        <div>
        <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Enter New Password</h1>
        <hr />
        <div className="text-center"> 
          {error && <div>{error}</div>}
        </div>
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form>
            <div className="my-3">
                <label htmlFor="passwordInput">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="passwordInput"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="text-center">
                <button className="my-2 mx-auto btn btn-dark" type="submit" onClick={(e) => handlePasswordReset(e)}>
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

export default ResetPass;
