import React, { useState } from "react";
import "./Review.css";

const Review = () => {
  const [reviews, setReviews] = useState([]); // Store reviews
  const [newReview, setNewReview] = useState(""); // Review input field

  // Handle review submission
  const handleReviewSubmit = (e) => {
    e.preventDefault();

    if (newReview.trim()) {
      setReviews([...reviews, newReview]); // Add new review
      setNewReview(""); // Clear input field
    }
  };

  const handleReviewChange = (e) => {
    setNewReview(e.target.value);
  };

  const handleDeleteReview = (index) => {
    const updatedReviews = reviews.filter((_, i) => i !== index);
    setReviews(updatedReviews);
  };

  return (
    <div className="review-container">
      <h2 className="review-title">Customer Reviews</h2>

      {/* Review Form */}
      <form className="review-form" onSubmit={handleReviewSubmit}>
        <textarea
          className="review-input"
          value={newReview}
          onChange={handleReviewChange}
          placeholder="Write your review..."
          rows="4"
        />
        <button type="submit" className="review-button">
          Submit Review
        </button>
      </form>

      {/* Display Reviews */}
      <div className="review-list">
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div key={index} className="review-item">
              <p>{review}</p>
              <button onClick={() => handleDeleteReview(index)}>Delete</button>
            </div>
          ))
        ) : (
          <p className="no-reviews">No reviews yet. Be the first to review!</p>
        )}
      </div>
    </div>
  );
};

export default Review;
