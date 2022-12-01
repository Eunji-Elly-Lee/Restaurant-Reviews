import { Link } from "react-router-dom";
import { Button, Card, Col, Row } from "react-bootstrap";
import "components/RestaurantCard.css";

function RestaurantCard({ restaurant }) {
  const address =
    restaurant.address.building +
    " " +
    restaurant.address.street +
    ", " +
    restaurant.address.zipcode;

  return (
    <Col lg="6" xl="4" className="restaurantCard">
      <Card>
        <Card.Body>
          <Card.Title>{restaurant.name}</Card.Title>
          <Card.Text>
            <strong>Cuisine: </strong>{restaurant.cuisine}
            <br />
            <strong>Address: </strong>{address}
          </Card.Text>
          <Row className="cardBtns">
            <Col>
              <Button variant="outline-primary" className="cardBtn">
                <Link to={"/restaurants/" + restaurant._id}>
                  View Reviews
                </Link>
              </Button>
            </Col>
            <Col>
              <Button variant="outline-primary" className="cardBtn">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={"https://www.google.com/maps/place/" + address}
                >
                  View Map
                </a>
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default RestaurantCard;
