# Book Review Frontend

A web application frontend for managing book reviews, built with React and Tailwind CSS.

## Features
- Display a list of all book reviews
- View detailed information about a single book review
- Create new book reviews
- Edit existing book reviews
- Delete book reviews

## Project Structure
- `src`: Contains the source code for the React application
  - `components`: Reusable UI components
  - `pages`: Different pages/routes of the application
  - `services`: API service calls
  - `App.js`: Main application component
  - `index.js`: Entry point of the application
- `public`: Static files and the HTML template
- `tailwind.config.js`: Tailwind CSS configuration file
- `package.json`: Project dependencies and scripts

## Prerequisites
- Node.js (v14+)
- npm (v6+)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/SethmiDanoshi/Book_review_Frontend.git
   cd book-review-frontend
   ```
2. Install dependencies:
    ```bash
    npm install
3. Start the development server:
    ```bash
    npm start
    ```
    
## Deployment
The build folder can be deployed to any static hosting service like Netlify, Vercel, or GitHub Pages.

## API Integration
The frontend communicates with the backend API to perform CRUD operations on book reviews.

## API Endpoints
Ensure that the backend API is running and accessible for the frontend to interact with.
