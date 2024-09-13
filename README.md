# MERN Stack E-commerce Application

## Description
This project is a full-stack e-commerce web application built using the MERN stack (MongoDB, Express.js, React, Node.js). The application allows users to browse products, make purchases via Stripe, and send email confirmations using Mailtrap. It is designed with a scalable architecture and hosted on AWS EC2.

## Features
- **User Authentication**: Secure login and signup functionality.
- **State Management**: Implemented with Redux for efficient state management.
- **Payment Processing**: Stripe is integrated for secure payment transactions.
- **Email Notifications**: Mailtrap is used for sending and testing email notifications.
- **API Testing**: Postman is used to test and validate backend API endpoints.
- **Cloud Hosting**: The application is hosted on AWS EC2, providing scalability and reliability.

## Tech Stack

### Backend
- **Express.js**: Web framework for Node.js, handling routing and API requests.
- **MongoDB**: NoSQL database used to store user data, orders, and products.
- **Node.js**: JavaScript runtime environment for backend logic.
- **Stripe**: Payment gateway for processing transactions securely.
- **Mailtrap**: Service for testing email functionality during development.
- **Postman**: Tool used to test the backend API.

### Frontend
- **React**: JavaScript library for building interactive user interfaces.
- **Redux**: State management for predictable state changes across the application.
- **CSS**: Styling for responsive and aesthetically pleasing UI.

### Hosting
- **AWS EC2**: Application hosted on Amazon EC2 for scalable and reliable cloud hosting.

## File Structure

### Backend
- **models**: Having all my mongodb schema structure.
- **controllers**: Having my handler function.
- **middleware**: Having all my middleware functions.
- **routes**: Routes to maintain the handlers.
- **utils**: Extra utils functions which can be frequently reused.


### Frontend
- **actions**: Having all my mongodb schema structure.
- **components**: Having my handler function.
- **slices**: Having all my middleware functions.
- **store**: Routes to maintain the handlers.

## Environment Variables
To run this project, you will need to add the following environment variables to your `.env` file in the backend directory:

MONGO_URI=<your_mongodb_connection_string> STRIPE_SECRET_KEY=<your_stripe_secret_key> MAILTRAP_USERNAME=<your_mailtrap_username> MAILTRAP_PASSWORD=<your_mailtrap_password> NODE_ENV=<development_or_production>


## Installation

### Prerequisites
Make sure you have the following installed:
- **Node.js**: [Download and install Node.js](https://nodejs.org/en/download/)
- **MongoDB**: [Install MongoDB locally or use MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- **AWS EC2**: Ensure your AWS EC2 instance is set up for deployment.

### Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-directory>

