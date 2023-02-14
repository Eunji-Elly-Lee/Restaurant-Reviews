import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import "components/ReviewCard.css";

function ReviewCard({ user, id, review, index, onDelete }) {
  const date = review.date.substring(10, 0);

  return (
    <Card key={review._id} className="reviewCard">
      <Card.Body>
        <Card.Text>
          <strong>User: </strong>
          {review.name}
          <br />
          <strong>Date: </strong>
          {date}
          <br />
          <strong>Review: </strong>
          {review.text}

          {user && user._id === review.user_id && (
            <>
              <br />
              <Button
                variant="outline-primary"
                className="deleteReviewBtn"
                onClick={() => onDelete(review._id, index)}
              >
                Delete
              </Button>
              <Button variant="outline-primary" className="editReviewBtn">
                <Link
                  to={"/restaurants/" + id + "/review"}
                  state={{
                    currentReview: review,
                  }}
                >
                  Edit
                </Link>
              </Button>
            </>
          )}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ReviewCard;
