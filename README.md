# 🛒 MERN E-commerce

A full-stack **E-commerce Website built with the MERN Stack** — MongoDB, Express.js, React, and Node.js.

This project is designed to practice and strengthen **full-stack web development** by implementing real-world e-commerce functionality, including authentication, product management, shopping cart, checkout, payments, and an admin dashboard.

> 🚧 **Status:** In Development

---

## 📌 Overview

Building an e-commerce application with the MERN stack is an excellent way to understand how modern full-stack applications are designed and developed.

The project follows a client-server architecture where **React** handles the frontend, **Node.js + Express.js** power the backend REST APIs, and **MongoDB** manages application data.

The project is being developed as part of my **MERN development journey**, with a focus on writing clean, scalable, and maintainable code.

---

## 🧰 Core Tech Stack

| Technology          | Purpose                                                          |
| ------------------- | ---------------------------------------------------------------- |
| **MongoDB**         | Database for users, products, orders, and other application data |
| **Express.js**      | Backend framework for building RESTful APIs                      |
| **React**           | Frontend library for building interactive user interfaces        |
| **Node.js**         | JavaScript runtime for server-side application logic             |
| **Redux Toolkit**   | Global state management                                          |
| **JWT**             | User authentication and authorization                            |
| **bcrypt**          | Secure password hashing                                          |
| **Stripe / PayPal** | Payment processing                                               |

---

## ✨ Key Features

### 👤 User Authentication

* User registration and login
* Secure password hashing with bcrypt
* JWT-based authentication
* Protected routes
* Role-based authorization
* User profile management

### 🛍️ Product Management

* Browse products
* Product details
* Product search
* Category filtering
* Price filtering
* Pagination
* Product ratings and reviews
* Product stock management

### 🛒 Shopping Cart

* Add products to cart
* Remove products
* Update quantities
* Calculate subtotal
* Calculate total price
* Persistent cart state

### 💳 Checkout & Payments

* Checkout workflow
* Shipping information
* Order summary
* Payment gateway integration
* Payment status tracking
* Order confirmation

### 📦 Order Management

* Create orders
* View order history
* View order details
* Track order status
* Update order status from admin panel

### 🔐 Admin Dashboard

* Admin authentication
* Product CRUD operations
* Manage products
* Manage inventory
* Manage users
* View orders
* Update order status
* Dashboard statistics

---

## 🏗️ Project Architecture

```text
mern-ecommerce/
│
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── features/
│   │   ├── hooks/
│   │   ├── services/
│   │   └── App.jsx
│   │
│   └── package.json
│
├── server/                 # Node.js + Express backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── services/
│   ├── utils/
│   ├── config/
│   └── server.js
│
├── admin/                  # Admin dashboard (if separated)
│
├── README.md
├── .gitignore
└── package.json
```

---

## 🔄 Application Flow

```text
                    ┌───────────────┐
                    │     React     │
                    │   Frontend    │
                    └───────┬───────┘
                            │
                         REST API
                            │
                    ┌───────▼───────┐
                    │    Express    │
                    │    + Node.js  │
                    └───────┬───────┘
                            │
                    ┌───────▼───────┐
                    │    MongoDB    │
                    │    Database   │
                    └───────────────┘

                            │
                    ┌───────▼───────┐
                    │ Payment Gateway│
                    │ Stripe/PayPal  │
                    └───────────────┘
```

---

## 🎯 Learning Objectives

Through this project, I aim to strengthen my understanding of:

* Full-stack application architecture
* React component-based development
* State management with Redux Toolkit
* REST API development
* Express.js middleware
* MongoDB and Mongoose
* Authentication and authorization
* JWT-based security
* Password hashing
* CRUD operations
* Database relationships
* Payment integration
* Error handling
* API validation
* Admin role management
* Deployment and production practices

---

## 🚀 Development Roadmap

### Phase 1 — Project Setup

* [x] Initialize Git repository
* [ ] Configure React frontend
* [ ] Configure Node.js backend
* [ ] Connect MongoDB
* [ ] Configure environment variables

### Phase 2 — Authentication

* [ ] User registration
* [ ] User login
* [ ] Password hashing
* [ ] JWT authentication
* [ ] Protected routes
* [ ] Admin roles

### Phase 3 — Products

* [ ] Product model
* [ ] Product API
* [ ] Product listing
* [ ] Product details
* [ ] Search
* [ ] Filtering
* [ ] Pagination
* [ ] Reviews and ratings

### Phase 4 — Shopping Cart

* [ ] Add to cart
* [ ] Remove from cart
* [ ] Update quantity
* [ ] Cart persistence
* [ ] Price calculations

### Phase 5 — Checkout

* [ ] Shipping information
* [ ] Order creation
* [ ] Order summary
* [ ] Payment integration
* [ ] Payment verification

### Phase 6 — Admin Dashboard

* [ ] Admin authentication
* [ ] Product management
* [ ] Inventory management
* [ ] User management
* [ ] Order management
* [ ] Dashboard statistics

### Phase 7 — Production

* [ ] Input validation
* [ ] Error handling
* [ ] Security improvements
* [ ] API optimization
* [ ] Responsive UI
* [ ] Testing
* [ ] Deployment
* [ ] Documentation

---

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/mern-ecommerce.git
cd mern-ecommerce
```

### 2. Install dependencies

```bash
npm install
```

Install frontend and backend dependencies according to the project structure.

### 3. Configure environment variables

Create a `.env` file in the backend directory:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
```

> Never commit `.env` files or secret keys to GitHub.

### 4. Start the development server

```bash
npm run dev
```

The application should now be available locally.

---

## 📚 References

This project is inspired by and built while learning from the following resources:

* [GeeksforGeeks — E-commerce Website using MERN Stack](https://www.geeksforgeeks.org/mern/e-commerce-website-using-mern-stack/)
* [MERN E-commerce Tutorial — YouTube](https://www.youtube.com/watch?v=el5bTI6GBQ8)
* [MERN Stack Tutorial — YouTube](https://www.youtube.com/watch?v=7E6um7NGmeE)

---

## 📈 Future Improvements

Possible future enhancements include:

* Product recommendations
* Wishlist
* Coupon and discount system
* Email notifications
* Image upload with Cloudinary
* Advanced analytics
* Order tracking
* Multiple payment methods
* PWA support
* Dockerization
* Automated testing
* CI/CD pipeline

---

## 🎓 Project Purpose

This project is primarily a **learning and portfolio project** created to gain practical experience in modern full-stack web development.

The goal is not just to build an e-commerce website, but to understand how the individual technologies work together to create a **scalable, secure, and production-oriented web application**.

---

## 👨‍💻 Developer

**Ajit Mandal**

Full Stack MERN Developer in progress 🚀

> **Learn → Build → Break → Debug → Improve → Repeat.**

---

## ⭐ Acknowledgment

If this project helps you learn something useful, consider giving the repository a ⭐.

**Happy Coding! 🚀**
