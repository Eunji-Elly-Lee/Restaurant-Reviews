import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "App.css";
import Header from "components/Header";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  const login = (user = null) => {
    setUser(user);
  };
  const logout = () => {
    setUser(null);
  };

  return (
    <div>
      <Router>
        <Header user={user} userLogout={logout} />
      </Router>
    </div>
  );
}

export default App;
