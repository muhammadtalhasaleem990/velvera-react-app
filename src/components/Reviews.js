// Reviews.js
import React, { useState } from 'react';
import './Reviews.css';
import { motion } from 'framer-motion';

const initialReviews = [
  {
    name: "Ayesha R.",
    rating: 5,
    message: "The scent lasts all day! Highly recommended.",
  },
  {
    name: "Ali S.",
    rating: 4,
    message: "Elegant fragrance and fast delivery.",
  },
  {
    name: "Zainab K.",
    rating: 5,
    message: "I love the packaging and the perfume. Feels premium!",
  },
];

const Reviews = () => {
  const [reviews, setReviews] = useState(initialReviews);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && message && rating) {
      const newReview = { name, message, rating };
      setReviews([newReview, ...reviews]);
      setName("");
      setMessage("");
      setRating(0);
    } else {
      alert("Please fill in all fields!");
    }
  };

  return (
    <section className="reviews-section" id="reviews">
      <h2>Customer Reviews</h2>

      <form className="review-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <textarea
          placeholder="Write your review..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        <div className="star-input">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={star <= rating ? "selected" : ""}
              onClick={() => setRating(star)}
            >
              ★
            </span>
          ))}
        </div>

        <button type="submit">Submit Review</button>
      </form>

      <div className="review-cards">
        {reviews.map((review, index) => (
          <motion.div
            className="review-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3>{review.name}</h3>
            <div className="stars">
              {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
            </div>
            <p>{review.message}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
