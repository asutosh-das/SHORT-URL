<div align="center">
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" alt="Express.js" />
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/EJS-B4CA65?style=for-the-badge&logo=ejs&logoColor=black" alt="EJS" />

  <h1>⚡ URL Shortener Microservice</h1>
  <p><strong>A robust, high-performance Node.js service for shortening URLs, tracking comprehensive click analytics, and securely managing user-specific links.</strong></p>
</div>

<hr />

## 📖 Table of Contents
- [About the Project](#-about-the-project)
- [Key Features](#-key-features)
- [Technology Stack](#-technology-stack)
- [Getting Started](#-getting-started)
- [API Documentation](#-api-documentation)
- [Project Architecture](#-project-architecture)

---

## 🚀 About the Project

In today's fast-paced digital ecosystem, sharing lengthy, complex URLs can be cumbersome. This **URL Shortener Microservice** provides an elegant solution. It ingests long URLs and generates compact, easily shareable identifiers while silently tracking valuable analytics on every click. 

Built with scalability and security in mind, this project also features isolated user environments, ensuring users only see and manage their own links.

---

## ✨ Key Features

- **🔗 Compact URL Generation**: Effortlessly convert any lengthy URL into a secure, 8-character compact ID.
- **⚡ Seamless Redirection**: Automatic, low-latency redirects from the short ID to the original destination.
- **📈 Granular Analytics**: Tracks exact timestamps and cumulative visit counts for unparalleled insights.
- **🛡️ Secure Authentication**: Fully integrated signup and login utilizing state-of-the-art token/cookie-based strategies.
- **👤 Isolated Dashboards**: User-specific realms ensure complete privacy and individualized link management.
- **🖥️ Dynamic SSR Interface**: A beautiful, responsive web UI rendered server-side using EJS.

---

## 🛠️ Technology Stack

| Domain | Technology | Description |
| :--- | :--- | :--- |
| **Backend Environment** | Node.js, Express.js | High-performance, event-driven server infrastructure |
| **Database & ODM** | MongoDB, Mongoose | Flexible NoSQL data storage and robust schema validation |
| **View Engine** | EJS (Embedded JavaScript) | Dynamic template generation for server-side rendering |
| **Authentication** | Custom UUID Strategy | Secure session tracking and validation |
| **Core Utilities** | NanoID / Shortid | Collision-resistant identifier generation |

---

## 🚦 Getting Started

Follow these instructions to configure and run a local instance of the application for development and testing.

### Prerequisites

Ensure you have the following installed on your local development environment:
- **Node.js**: (v14.0 or higher recommended)
- **MongoDB**: Running locally on the default port `27017`

### Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd SHORT-URL
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Verify Database Connection**: 
   Ensure your local MongoDB service is active. The application connects to `mongodb://127.0.0.1:27017/short-url` by default.

4. **Initialize the Server**:
   ```bash
   npm start
   ```
   *The server will initialize and begin accepting connections on `http://localhost:8001`.*

---

## 🌐 API Documentation

### 🖥️ Web Interface (UI Router)

| Route | HTTP Method | Route Description | Authentication |
| :--- | :--- | :--- | :---: |
| `/` | `GET` | Main Dashboard to view and create your URLs | 🔒 Required |
| `/signup` | `GET` | Presents the User Registration Page | 🔓 Public |
| `/login` | `GET` | Presents the User Authentication Page | 🔓 Public |

### 🔐 User Authentication Endpoints

| Endpoint | HTTP Method | Description | Body Requirements |
| :--- | :--- | :--- | :--- |
| `/user` | `POST` | Registers a new user account | `{ "name", "email", "password" }` |
| `/user/login` | `POST` | Authenticates user and provisions cookie | `{ "email", "password" }` |

### 🔗 URL Management Endpoints

| Endpoint | HTTP Method | Description | Authentication |
| :--- | :--- | :--- | :---: |
| `/url` | `POST` | Generates a new Short URL.<br>**Payload**: `{ "url": "https://..." }` | 🔒 Required |
| `/url/:shortId` | `GET` | Parses `shortId`, logs click, and redirects. | 🔓 Public |
| `/url/analytics/:shortId` | `GET` | Retrieves aggregate telemetry and click statistics. | 🔓 Public |

**Example Analytics Response:**
```json
{
  "totalClicks": 6,
  "analytics": [
    {
      "timeStamp": 1773339810811,
      "_id": "64bfbf5678abcd001xyz123"
    }
  ]
}
```

---

## 🏗️ Project Architecture

```text
SHORT-URL/
├── controllers/      # Handles incoming HTTP requests and business logic routing
├── middlewares/      # Security, authentication validation, and request interception
├── models/           # Mongoose schemas (User, URL) defining data integrity
├── routes/           # Express router configuration and endpoint mapping
├── service/          # Core cryptographic auth logic and stateful session maps
├── views/            # Dynamic EJS template presentation files
├── index.js          # Main application bootstrapper and middleware pipeline
├── connect.js        # MongoDB connection fabric
└── package.json      # Dependency management and script definitions
```

---
<div align="center">
  <p>Built with ❤️ and Node.js</p>
</div>
