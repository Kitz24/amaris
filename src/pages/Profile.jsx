import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SessionContext } from "../SessionContext";
import { Navbar, Footer } from "../components";
import { useDispatch } from "react-redux";
import supabase from '../components/supabaseClient'; // Import supabase client

function Profile() {
    const { session, setSession } = useContext(SessionContext); // Destructure session context
    const navigate = useNavigate(); // Get the navigate function
    const dispatch = useDispatch();

    useEffect(() => {
        // Retrieve session data from localStorage when component mounts
        const storedSession = localStorage.getItem('session');
        if (storedSession) {
            setSession(JSON.parse(storedSession));
        }
    }, [setSession]);

    // Function to handle sign out
    const handleSignOut = async () => {
        try {
            if (session) {
                await supabase.auth.signOut(); // Sign out using Supabase client
                setSession(null); // Clear session from context
                localStorage.removeItem('session'); // Remove session data from localStorage
                dispatch({ type: "CLEAR_CART" });
                navigate('/'); // Navigate back to home page
            }
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

    
  const handleAdmin = async (event2) => {
    try {
        //const a = await supabase.from('ADMIN_TABLE').insert({admin_id: 2, admin_name: 'test', admin_pass: 'test'});
        const a = await supabase.from('ADMIN_TABLE').select('admin_name');
        console.log(a.data[0]);
    } catch (error) {
        console.error( error);
    }
    }
    
    const handleRole = async (event2) => {
        try {
            const { data, error } = await supabase.auth.getUser('kittusroad@gmail.com');
            console.log(data);
        } catch (error) {
            console.error( error);
        }
    
    
  }

    return(
        <div>
            <Navbar/>
            <div className="container my-3 py-3">
                <header className="App">
                    <div className="text-center">
                        <h1>Success. Welcome User {session ? session.user.email : ''}</h1>
                    
                    
                    <button className="my-2 mx-auto btn btn-dark" type="submit" onClick={handleSignOut}>
                    Sign Out
                </button>

                {/* <button className="my-2 mx-auto btn btn-dark" type="submit" onClick={handleAdmin}>ADMIN ACTION</button> */}

                {/* <button className="my-2 mx-auto btn btn-dark" type="submit" onClick={handleRole}>some cahnging role acTION</button> */}
                
                    </div>
                </header>
            </div>
            <Footer />
            </div>
);
}

export default Profile;
