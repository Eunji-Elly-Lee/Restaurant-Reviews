import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import RestaurantService from "services/RestaurantService";
import { Button, Col, Form, Row } from "react-bootstrap";
import "components/ReviewForm.css";

function ReviewForm({ user }) {
  const initialReviewState = "";
  const [review, setReview] = useState(initialReviewState);
  const [editing, setEditing] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const location = useLocation();
  const { id } = useParams();

  const onChangeReview = (e) => {
    setReview(e.target.value);
  };

  const submitReview = (e) => {
    e.preventDefault();

    var data = {
      text: review,
      name: user.name,
      user_id: user._id,
      restaurant_id: id
    };

    if (editing) {
      data.review_id = location.state.currentReview._id
      RestaurantService.updateReview(data)
        .then(() => {
          setSubmitted(true);
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      RestaurantService.createReview(data)
        .then(() => {
          setSubmitted(true);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  useEffect(() => {
    if (location.state && location.state.currentReview) {
      setEditing(true);
      setReview(location.state.currentReview.text);
    }
  }, [location.state]);

  return (
    <div className="reviewContainer">
      {user ? (
        <>
          {submitted ? (
            <>
              <h4>You submitted successfully!</h4>
              <div className="backContainer">
              <Button variant="outline-primary" className="backBtn">
                <Link to={"/restaurants/" + id}>
                Back to Restaurant
                </Link>
              </Button>
              </div>
            </>
          ) : (
            <Form onSubmit={submitReview}>
              <Form.Group as={Row} className="reviewInput">
                <Form.Label column sm="3">{editing ? "Edit" : "Create"} Review</Form.Label>
                <Col sm="9">
                  <Form.Control
                    as="textarea"
                    rows={3}
                    required
                    value={review}
                    onChange={onChangeReview}
                  />
                </Col>
              </Form.Group>
              <Button
                className="reviewBtn"
                variant="outline-info"
                type="submit"
              >
                {editing ? "Edit" : "Create"}
              </Button>
            </Form>
          )}
        </>
      ) : (
        <h4>Please log in!</h4>
      )}
    </div>
  );
}

export default ReviewForm;
