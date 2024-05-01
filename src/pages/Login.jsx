import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import supabase from '../components/supabaseClient';
import { Navbar, Footer } from "../components";
import { useNavigate } from 'react-router-dom';
import { SessionContext } from '../SessionContext'; // Import SessionContext as named export

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { session, setSession } = useContext(SessionContext); // Destructure session context
  const [signedOut, setSignedOut] = useState(false);
  const [firstlogin, setFirstlogin ] = useState(true);
  const navigate = useNavigate();
  
  

  useEffect(() => {
    const authListener = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
      setSignedOut(false);
      if(session != null){
        // Store session data in localStorage
        localStorage.setItem('session', JSON.stringify(session));

        if (firstlogin === true) {
          navigate('/profile');
          setFirstlogin(false); // Navigate to the profile page only if the user just logged in
        }
        
      }
    });

    return () => {
      authListener.data.subscription.unsubscribe();
    };
  }, []);


  const handleLogin = async (event) => {
    event.preventDefault();

    try {
     
      
      const { user, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        throw error;
      }
    } catch (error) {
      setError(error.message);
    }
  };


  return (
    <div>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Login</h1>
        <hr />
        <div className="text-center">
          {<div>
            {
               }
            </div>}
          {session && <div>Sign in successful! Email: {session.user.email} Your ID: {session.user.id}</div>}
          {signedOut && <div>Successfully signed out!</div>}
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
              <Link to="/forgot">Forgot Password?</Link>
              <div className="text-center">
                <button className="my-2 mx-auto btn btn-dark" type="submit" onClick={(e) => handleLogin(e)}>
                  Login
                </button>
                
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
