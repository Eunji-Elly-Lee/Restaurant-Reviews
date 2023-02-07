import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "App.css";
import Header from "components/Header";
import Restaurants from "components/Restaurants";
import Login from "components/Login";
import Join from "components/Join";
import Reviews from "components/Reviews";
import ReviewForm from "components/ReviewForm";

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
          <Route path={`${process.env.PUBLIC_URL}/restaurants`} element={<Restaurants />} />
          <Route path={`${process.env.PUBLIC_URL}/login`} element={<Login login={login} />} />
          <Route path={`${process.env.PUBLIC_URL}/join`} element={<Join login={login} />} />
          <Route path={`${process.env.PUBLIC_URL}/restaurants/:id`} element={<Reviews user={user} />} />
          <Route path={`${process.env.PUBLIC_URL}/restaurants/:id/review`} element={<ReviewForm user={user} />} />
        </Routes>        
      </Router>
    </div>
  );
}

export default App;
