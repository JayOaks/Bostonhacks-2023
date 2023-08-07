import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, signInWithGoogle } from "../firebase/firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";
import GoogleIcon from "../components/common/svg/GoogleIcon";

// Login page
export default function Login() {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
  
    useEffect(() => {
      if (loading) return;
  
      if (user) navigate("/application");
  
    }, [user, loading, navigate]);
  
    return (
      <div className="flex justify-center items-center h-screen">
        <button 
            onClick={signInWithGoogle}
            className="font-bold flex items-center space-x-2 px-4 py-6 rounded-lg">
          <GoogleIcon />
          <span>Login with Google</span>
        </button>
  
        {/* <Footer /> */}
      </div>
    );
}
