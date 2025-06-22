# 🚀 Secure & Reliable Express.js API

A professional-grade REST API built with **Express.js**, designed with industry best practices including versioning, security, pagination, rate limiting, and proper logging.

This project uses dummy JSON data to simulate a real-world application and demonstrates how to structure and build scalable, maintainable APIs.

---

## 📂 Features Implemented

| Feature                     | Description                                                                 |
|----------------------------|-----------------------------------------------------------------------------|
| ✅ **Clear Naming**        | Clean, RESTful routes like `/api/v1/products`                               |
| ✅ **API Versioning**      | Versioning enabled via URL path (`/api/v1/`)                                |
| ✅ **Reliability**         | Error handling middleware and validations in place                          |
| ✅ **Pagination**          | Supports `?page=` and `?limit=` query parameters                            |
| ✅ **Query Filtering**     | Use query strings like `?category=tech`                                     |
| ✅ **Security**            | Secured using `helmet`, CORS, and JSON validation                           |
| ✅ **Rate Limiting**       | Protected against abuse with request throttling                             |
| ✅ **Cross Resource Refs**| Products reference `userId` which can be cross-referenced via `/users/:id`  |
| ✅ **Logging**             | Professional logging using `morgan` and custom logs                         |

---

## 📁 Project Structure

