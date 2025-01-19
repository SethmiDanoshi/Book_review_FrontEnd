import React, { useState } from 'react';
import { Save, Star, BookOpen, User } from 'lucide-react';

const BookReviewForm = ({ onSubmit, initialValues = {}, submitButtonText = 'Submit Review' }) => {
  const [title, setTitle] = useState(initialValues.title || '');
  const [author, setAuthor] = useState(initialValues.author || '');
  const [rating, setRating] = useState(initialValues.rating || 1);
  const [reviewText, setReviewText] = useState(initialValues.reviewText || '');
  const [errors, setErrors] = useState({});


  //* Form VAlidation
  const validateForm = () => {
    let formErrors = {};
    if (!title.trim()) formErrors.title = 'Book title is required';
    if (!author.trim()) formErrors.author = 'Author name is required';
    if (!reviewText.trim()) formErrors.reviewText = 'Review cannot be empty';
    if (rating < 1 || rating > 5) formErrors.rating = 'Rating must be between 1 and 5';
    
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const formData = { title, author, rating, reviewText };
      onSubmit(formData);
    }
  };

  const renderStars = () => {
    return [1, 2, 3, 4, 5].map((value) => (
      <Star
        key={value}
        className={`w-8 h-8 cursor-pointer ${
          rating >= value ? 'text-yellow-400' : 'text-gray-300'
        } hover:text-yellow-500 transition-colors`}
        onClick={() => setRating(value)}
        fill={rating >= value ? 'currentColor' : 'none'}
      />
    ));
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-2xl rounded-xl p-8 space-y-7">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        {initialValues.id ? 'Update Book Review' : 'Write Your Book Review'}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Book Title</label>
          <div className="relative">
            <BookOpen className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none transition-all"
              placeholder="Enter book title"
              // required
            />
          </div>
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Author</label>
          <div className="relative">
            <User className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none transition-all"
              placeholder="Enter author name"
              // required
            />
          </div>
          {errors.author && <p className="text-red-500 text-sm">{errors.author}</p>}
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Review</label>
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none transition-all"
            placeholder="Share your thoughts about the book"
            // required
          />
          {errors.reviewText && <p className="text-red-500 text-sm">{errors.reviewText}</p>}
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Rating</label>
          <div className="flex justify-center space-x-2">{renderStars()}</div>
          {errors.rating && <p className="text-red-500 text-sm">{errors.rating}</p>}
        </div>
        <button
          type="submit"
          className="w-full flex items-center justify-center space-x-2 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-all focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <Save className="w-5 h-5" />
          <span>{submitButtonText}</span>
        </button>
      </form>
    </div>
  );
};

export default BookReviewForm;
