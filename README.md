E-Learning Commerce Platform

Welcome to the E-Learning Commerce Platform! This is a Flask-based web application designed to provide a comprehensive solution for online learning and e-commerce.
Users can browse courses, make purchases, and access educational materials through a user-friendly interface.

Features

User Management: Register, login, and manage user profiles.
Course Catalog: Browse and search for available courses.
Shopping Cart: Add courses to a cart and proceed to checkout.
Payment Integration: Secure payment processing for course purchases.
Course Enrollment: Access purchased courses and materials.
Admin Dashboard: Manage courses, users, and transactions.

Installation Prerequisites

Python 3.7+
pip (Python package installer)
A virtual environment manager (optional but recommended)
Clone the Repository

    git clone https://github.com/thato2-5/codespaces-workflow.git
    cd codespaces-workflow
    
Create and Activate a Virtual Environment

    python -m venv venv
    source venv/bin/activate
On Windows use `venv\Scripts\activate`

Install Dependencies

    pip install -r requirements.txt

Configuration Environment Variables

Create a .env file in the root directory and set the following environment variables:

    FLASK_APP=app.py
    FLASK_ENV=development
    SECRET_KEY=your_secret_key
    DATABASE_URL=your_database_url
    PAYMENT_API_KEY=your_payment_api_key

Replace your_secret_key, your_database_url, and your_payment_api_key with your actual configuration values.

Database Setup
Run the following command to initialize the database:

    flask db upgrade
  
Usage
    `flask run`
The app will be available at http://127.0.0.1:5000/.

Access the Admin Dashboard
To access the admin dashboard, navigate to http://127.0.0.1:5000/admin and log in with admin credentials.

Testing
To run the test suite, use:

    pytest

Make sure your test environment is correctly set up before running the tests.

Contributing
We welcome contributions! To contribute:

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes.
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature-branch).
Open a pull request.
Please make sure your code adheres to our coding standards and includes tests where applicable.

