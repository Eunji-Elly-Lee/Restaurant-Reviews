import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "App.css";
import Header from "components/Header";
import Restaurants from "components/Restaurants";
import Login from "components/Login";

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
        <Routes>
          <Route path={`${process.env.PUBLIC_URL}/`} element={<Restaurants />} />
          <Route path={`${process.env.PUBLIC_URL}/login`} element={<Login login={login} />} />
        </Routes>        
      </Router>
    </div>
  );
}

export default App;
