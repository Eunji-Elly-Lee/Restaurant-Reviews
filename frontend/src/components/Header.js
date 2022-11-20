import { Container, Nav, Navbar } from "react-bootstrap";

function Header({ user, userLogout }) {
  return (
    <Navbar expand="md" variant="dark" bg="primary">
      <Container>
        <Navbar.Brand href="/">Restaurant Reviews</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" active="true">Restaurants</Nav.Link>
            {user ? (
              <Nav.Link href="/" active="true" onClick={userLogout}>
                Logout - {user.userName}
              </Nav.Link>
            ) : (
              <>
                <Nav.Link href="/login" active="true">Login</Nav.Link>
                <Nav.Link href="/join" active="true">Join</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
