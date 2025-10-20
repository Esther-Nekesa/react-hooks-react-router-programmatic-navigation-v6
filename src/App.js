import { useState, useEffect } from "react";
import { Outlet, Navigate, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/"); // Go to Home when logged in
    } else {
      navigate("/login"); // Go to Login when logged out
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="app">
      {/* Only show NavBar when logged in */}
      {isLoggedIn ? <NavBar logout={logout} /> : <Navigate to="/login" />}
      {/* Pass login function to children */}
      <Outlet context={login} />
    </div>
  );
}

export default App;
