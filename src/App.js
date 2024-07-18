// src/App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import Chat from "./chat";
import Login from "./signin"; // Update with your authentication components
import SignUp from "./signup";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <div className="App">
        {user ? (
          <Chat user={user} />
        ) : (
          <Routes>
            {/* Routes for different authentication methods */}
            <Route path="/login" element={<Login setUser={setUser} />} />
            {/* Add routes for other authentication methods */}
            <Route path="/" element={<Login setUser={setUser} />} />
            <Route exact path="/signup" element={<SignUp/>} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
