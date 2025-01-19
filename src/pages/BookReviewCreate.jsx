import React from 'react';
import { useNavigate } from 'react-router-dom';
import BookReviewForm from '../components/BookReviewForm';
import apiClient from '../services/apiClient';
import { useToast } from '../components/Toast';

const BookReviewCreate = () => {
  const navigate = useNavigate();
  const showToast = useToast();

  const handleCreate = async (data) => {
    try {
      await apiClient.post('/reviews', data);
      showToast('Review created successfully');
      navigate('/');
    } catch (error) {
      showToast('Failed to create review', 'error');
    }
  };

  return (
    <div className="p-4">
      <BookReviewForm onSubmit={handleCreate} />
    </div>
  );
};

export default BookReviewCreate;