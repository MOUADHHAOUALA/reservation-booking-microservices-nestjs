# 🐰 Bunny - Modern Reservation System

![NestJS](https://img.shields.io/badge/nestjs-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Microservices](https://img.shields.io/badge/Microservices-FF6F00?style=for-the-badge&logo=kubernetes&logoColor=white)

[![CI/CD](https://github.com/yourusername/bunny/actions/workflows/main.yml/badge.svg)](https://github.com/yourusername/bunny/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Bunny is a hop-forward 🚀 reservation system built with NestJS microservices architecture.

## 🌈 Features

| Service          | Description                          | Tech Stack              |
|------------------|--------------------------------------|-------------------------|
| **🛡️ Auth**      | JWT authentication & user management | NestJS, MongoDB, Redis  |
| **📅 Booking**    | Reservation management               | NestJS, MongoDB         |
| **💸 Payments**   | Secure payment processing            | Stripe API, Webhooks    |
| **📬 Notifications** | Email/SMS alerts                   | Nodemailer, Twilio      |
| **📊 Analytics**  | Business insights                    | MongoDB Aggregations    |

## 🛠️ Tech Stack

- **Framework**: NestJS 10
- **Database**: MongoDB Atlas
- **Message Broker**: RabbitMQ
- **Cache**: Redis
- **Containerization**: Docker + Docker Compose
- **CI/CD**: GitHub Actions

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/bunny.git
cd bunny

# Start all services
docker-compose up -d
