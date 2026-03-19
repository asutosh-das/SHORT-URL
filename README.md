<div align="center">
  <h1>⚡ Short URL Manager</h1>
  <p>A high-performance Node.js service for shortening URLs, tracking comprehensive click analytics, and managing user-specific links securely.</p>
</div>

---

## 🌟 Key Features

- **🔗 Core URL Shortening**: Effortlessly convert any long, cumbersome URL into a compact, easily shareable 8-character ID.
- **🚀 Seamless Redirection**: Automatic, lightning-fast redirects to the original URL upon visiting the short ID.
- **📊 Granular Click Analytics**: Tracks and records exact timestamps for every single visit to your short URLs.
- **🛡️ Secure User Authentication**: Full signup and login functionality utilizing secure custom cookie/token-based auth.
- **👤 Personalized Dashboards**: Users have isolated environments—you only see and manage the URLs you have personally created.
- **🖥️ Server-Side Views**: Beautiful, out-of-the-box web interface rendered dynamically with EJS.

## 🛠️ Technology Stack

- **Backend Context**: Node.js, Express.js
- **Database & ODM**: MongoDB, Mongoose
- **View Engine**: Embedded JavaScript Templates (EJS)
- **Authentication**: Custom Authentication Strategy using UUIDs
- **Identifier Generation**: NanoID / ShortID

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure you have the following installed on your local development machine:
- [Node.js](https://nodejs.org/en/download/) (v14.x or higher recommended)
- [MongoDB](https://www.mongodb.com/try/download/community) (Running locally on the default port `27017`)

### Installation

1. **Clone the repository** (or download and extract the ZIP file):
   ```bash
   git clone <repository-url>
   cd SHORT-URL
   ```

2. **Install all necessary NPM dependencies**:
   ```bash
   npm install
   ```

3. **Verify MongoDB Connection**: 
   Ensure your local instance of MongoDB is running. The app connects to `mongodb://127.0.0.1:27017/short-url` by default.

### Running the Application

Start the development server:
```bash
npm start
```
*The server will initialize and begin listening on `http://localhost:8001`.*

---

## 📖 Application Routing & Endpoints

### 🖥️ Web Interface (Views)
| Route | Method | Description | Auth Required |
| --- | --- | --- | --- |
| `/` | `GET` | Home Dashboard to view and create your URLs | ✅ Yes |
| `/signup` | `GET` | User Signup Page | ❌ No |
| `/login` | `GET` | User Login Page | ❌ No |

### 🔐 User Authentication API
| Endpoint | Method | Description |
| --- | --- | --- |
| `/user` | `POST` | Create a new user account (Signup). Requires `name`, `email`, and `password`. |
| `/user/login` | `POST` | Authenticate a user and set cookies (Login). Requires `email` and `password`. |

### 🔗 URL Operations API
| Endpoint | Method | Description | Auth Required |
| --- | --- | --- | --- |
| `/url` | `POST` | Generate a new Short URL. <br> **Body**: `{ "url": "https://www.example.com" }` | ✅ Yes |
| `/url/:shortId` | `GET` | Public route. Redirects to the original full-length URL and logs the visit. | ❌ No |
| `/url/analytics/:shortId` | `GET` | Retrieve recorded click analytics for a specific short ID. | ❌ No |

#### Example Analytics Response
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

## 🏗️ Project Structure

```text
├── controllers/      # Handles incoming requests and business logic
├── middlewares/      # Authentication and routing middleware
├── models/           # Mongoose schemas (User, URL)
├── routes/           # Express router definitions
├── service/          # Core auth logic and session mapping
├── views/            # EJS template files
├── index.js          # Application entry point
├── connect.js        # MongoDB connection setup
└── package.json      # Dependencies and scripts
```
