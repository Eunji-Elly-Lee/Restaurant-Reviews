import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import "App.css";
import Header from "components/Header";
import Restaurants from "components/Restaurants";

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
        </Routes>        
      </Router>
    </div>
  );
}

export default App;
