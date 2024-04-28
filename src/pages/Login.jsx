import React, { useState, useEffect } from 'react';
import supabase from '../components/supabaseClient';
import { Navbar, Main, Product, Footer } from "../components";


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [session, setSession] = useState(null); // State variable to hold the session
  const [signedOut, setSignedOut] = useState(false); // State variable to track sign-out status

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
      setSignedOut(false); // Reset signedOut state when session changes
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const signOut = async () => {
    try {
      if (session) {
        await supabase.auth.signOut();
        
        setSignedOut(true); // Set signedOut to true when sign-out is successful
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const handleLogin = async () => {
    try {
      const { user, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        throw error;
      }
      window.location.reload();
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
        {session && <div>Sign in successful! Email: {session.user.email}</div>} {/* Display success message when there's an active session */}
      {signedOut && <div>Successfully signed out!</div>} {/* Display success message when signedOut is true */}
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
              <div className="my-3">
                <p>New Here?  </p>
                <p>ADMIN LOGIN:  </p> {/* Additem link */}
              </div>
              <div className="text-center">
                <button className="my-2 mx-auto btn btn-dark" type="submit" onClick={handleLogin}>
                  Login
                </button>
                
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
      
      
      
      
      
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
  
};

export default Login;
