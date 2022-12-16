import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "components/Header.css";

function Header({ user, userLogout }) {
  return (
    <Navbar expand="md" variant="dark" bg="primary">
      <Container>
        <Navbar.Brand>Restaurant Reviews</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav">
            <Link to="/">Restaurants</Link>
            {user ? (
              <Link to="/"onClick={userLogout}>
                Logout - {user.name}
              </Link>
            ) : (
              <>
                <Link to="/login">Login</Link>
                <Link to="/join">Join</Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
