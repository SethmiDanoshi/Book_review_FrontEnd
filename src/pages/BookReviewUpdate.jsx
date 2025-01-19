import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BookReviewForm from '../components/BookReviewForm';
import apiClient from '../services/apiClient';
import { useToast } from '../components/Toast';

const BookReviewUpdate = () => {
  const [initialValues, setInitialValues] = useState(null); 
  const { id } = useParams();
  const navigate = useNavigate();
  const showToast = useToast();

  useEffect(() => {
    const fetchReviewDetails = async () => {
      try {
        const response = await apiClient.get(`/reviews/${id}`);
        setInitialValues(response.data); 
      } catch (error) {
        showToast('Failed to fetch review details', 'error');
      }
    };

    fetchReviewDetails();
  }, [id, showToast]);

  const handleUpdate = async (data) => {
    try {
      await apiClient.put(`/reviews/${id}`, data); 
      showToast('Review updated successfully', 'success');
      navigate('/'); 
    } catch (error) {
      showToast('Failed to update review', 'error');
    }
  };

  if (!initialValues)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-green-500"></div>
      </div>
    );

  return (
    <div className="p-4">
      <BookReviewForm
        onSubmit={handleUpdate}
        initialValues={initialValues}
        submitButtonText="Update Review"
      />
    </div>
  );
};

export default BookReviewUpdate;
