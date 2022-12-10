import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "components/SearchBar.css";

function SearchBar({ cuisines, find, refreshList }) {
  const [searchName, setSearchName] = useState("");
  const [searchZip, setSearchZip] = useState("");
  const [searchCuisine, setSearchCuisine] = useState("All Cuisines");
  const [selected, setSelected] = useState("");

  const onChangeSearchName = (e) => {
    setSearchName(e.target.value);
  };

  const onChangeSearchZip = (e) => {
    setSearchZip(e.target.value);
  };

  const onChangeSearchCuisine = (e) => {
    setSearchCuisine(e.target.value);
    setSelected(e.target.value);
  };

  const findByName = (e) => {
    e.preventDefault();

    if (searchName === "") {
      refreshList();
    } else {
      find(searchName, "name");
      setSearchName("");
    }
  };

  const findByZip = (e) => {
    e.preventDefault();

    if (searchZip === "") {
      refreshList();
    } else {
      find(searchZip, "zipcode");
      setSearchZip("");
    }
  };

  const findByCuisine = (e) => {
    e.preventDefault();

    if (searchCuisine === "All Cuisines") {
      refreshList();
    } else {
      find(searchCuisine, "cuisine");
      setSearchCuisine("All Cuisines");
      setSelected("All Cuisines");
    }
  };

  return (
    <Container className="searchContainer">
      <Row>
        <Col lg className="searchForm">
          <Form onSubmit={findByName}>
            <Form.Group as={Row}>
              <Col sm="9">
                <Form.Control
                  type="text"
                  placeholder="Search by name"
                  value={searchName}
                  onChange={onChangeSearchName}
                />
              </Col>
              <Col sm="2" className="searchBtn">
                <Button variant="outline-info" type="submit">
                  Search
                </Button>
              </Col>
            </Form.Group>
          </Form>
        </Col>
        <Col lg className="searchForm">
          <Form onSubmit={findByZip}>
            <Form.Group as={Row}>
              <Col sm="9">
                <Form.Control
                  type="text"
                  placeholder="Search by zip"
                  value={searchZip}
                  onChange={onChangeSearchZip}
                />
              </Col>
              <Col sm="2" className="searchBtn">
                <Button variant="outline-info" type="submit">
                  Search
                </Button>
              </Col>
            </Form.Group>
          </Form>
        </Col>
        <Col lg className="searchForm">
          <Form onSubmit={findByCuisine}>
            <Form.Group as={Row}>
              <Col sm="9">
                <Form.Select onChange={onChangeSearchCuisine} value={selected}>
                  {cuisines.map((cuisine, index) => {
                    return (
                      <option key={index} value={cuisine}>
                        {cuisine.substr(0, 20)}
                      </option>
                    );
                  })}
                </Form.Select>
              </Col>
              <Col sm="2" className="searchBtn">
                <Button variant="outline-info" type="submit">
                  Search
                </Button>
              </Col>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default SearchBar;
