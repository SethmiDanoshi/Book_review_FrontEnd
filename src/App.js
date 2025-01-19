import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BookReviewCreate from './pages/BookReviewCreate';
import BookReviewUpdate from './pages/BookReviewUpdate';
import { ToastProvider } from './components/Toast';

function App() {
  return (
    <Router>
      <ToastProvider>
        <div className="min-h-screen bg-gray-100">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<BookReviewCreate />} />
            <Route path="/edit/:id" element={<BookReviewUpdate />} />
          </Routes>
        </div>
      </ToastProvider>
    </Router>
  );
}

export default App;