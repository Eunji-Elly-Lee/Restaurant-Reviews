import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import RestaurantService from "services/RestaurantService";
import { Button, Card } from "react-bootstrap";
import ReviewCard from "./ReviewCard";
import "components/Reviews.css";

function Reviews({ user }) {
  const initialRestaurantState = {
    id: null,
    name: "",
    address: {},
    cuisine: "",
    reviews: [],
  };
  const message = "No Restaurant Selected!";
  const [restaurant, setRestaurant] = useState(initialRestaurantState);
  const [address, setAddress] = useState("");
  const { id } = useParams();

  const getRestaurant = (id) => {
    RestaurantService.get(id)
      .then((response) => {
        const callingRestaurant = response.data;

        if (callingRestaurant !== null) {
          setRestaurant(response.data);
          setAddress(
            response.data.address.building +
            " " +
            response.data.address.street +
            ", " +
            response.data.address.zipcode
          );
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const onDelete = (reviewId, index) => {
    RestaurantService.deleteReview(reviewId, user._id)
      .then(() => {
        setRestaurant((prev) => {
          prev.reviews.splice(index, 1);

          return({
            ...prev,
          })
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getRestaurant(id);
  }, [id]);

  return (
    <div className="restaurantContainer">
      {restaurant._id ? (
        <>
          <h5>{restaurant.name}</h5>
          <p className="restaurantText">
            <strong>Cuisine: </strong>
            {restaurant.cuisine}
          </p>
          <p className="restaurantText">
            <strong>Address: </strong>
            {address}
          </p>
          <Button className="addReviewBtn" variant="outline-info">
            <Link to={"/restaurants/" + id + "/review"}>Add Review</Link>
          </Button>
          <p className="reviewTitle">
            <strong>Reviews</strong>
          </p>
          {restaurant.reviews.length > 0 ? (
            restaurant.reviews.map((review, index) => {
              return (
                <ReviewCard
                  key={review._id}
                  user={user}
                  id={id}
                  review={review}
                  index={index}
                  onDelete={onDelete}
                />
              );
            })
          ) : (
            <Card>
              <Card.Body>
                <Card.Text>No Reviews Yet!</Card.Text>
              </Card.Body>
            </Card>
          )}
        </>
      ) : (
        <>{message}</>
      )}
    </div>
  );
}

export default Reviews;
