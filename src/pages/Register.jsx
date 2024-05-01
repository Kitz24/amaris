import React, { useState, useEffect, useContext } from 'react'
import supabase from '../components/supabaseClient';
import { Footer, Navbar } from "../components";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { SessionContext } from '../SessionContext'; // Import SessionContext as named export

const Register = () => {
    const [Username, setUsername] = useState(''); // Define Username state
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const { session, setSession } = useContext(SessionContext); // Destructure session context
    const [signedOut, setSignedOut] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const authListener = supabase.auth.onAuthStateChange((event, session) => {
          setSession(session);
          setSignedOut(false);
          if(session != null){
            // Store session data in localStorage
            localStorage.setItem('session', JSON.stringify(session));
            if (!session.user.last_sign_in_at) {
                navigate('/profile'); // Navigate to the profile page only if the user just logged in
              }
          }
        });
    
      });

    const handleSignUp = async (event) => {
    event.preventDefault();

    try {
      const { user, error } = await supabase.auth.signUp({
        email,
        password,
        data: { full_name: Username } // Additional user data
      });
      if (error) {
        throw error;
      } else {
        // Redirect to profile page after successful registration
        alert('Please Check your Email to Confirm later');
      }
    } catch (error) {
      setError(error.message);
    }
};


    return (
        <>
            <Navbar />
            <div className="container my-3 py-3">
                <h1 className="text-center">Register</h1>
                <hr />
                <div class="row my-4 h-100">
                    <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                        <form>
                            <div class="form my-3">
                                <label for="Username">Full Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="Username"
                                    placeholder=""
                                    value={Username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div class="form my-3">
                                <label for="Email">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="Email"
                                    placeholder="name@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div class="form  my-3">
                                <label for="Password">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="Password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                            </div>
                            <div className="my-3">
                                <p>Already has an account? <Link to="/login" className="text-decoration-underline text-info">Login</Link> </p>
                            </div>
                            <div className="text-center">
                                <button class="my-2 mx-auto btn btn-dark" type="submit" onClick={(e) => handleSignUp(e)}>
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Register