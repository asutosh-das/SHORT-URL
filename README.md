# Short URL API

A simple Node.js REST API for shortening URLs and tracking basic click analytics, built with Express and MongoDB.

## Features

- Shorten any long URL into a compact, 8-character ID.
- Automatically redirects users to the original URL when visiting the short ID.
- Tracks and records the timestamp of each visit for analytics.

## Prerequisites

- [Node.js](https://nodejs.org/) installed
- [MongoDB](https://www.mongodb.com/) running locally on default port `27017`

## Installation

1. Clone or download the repository.
2. Open your terminal in the project directory.
3. Install the dependencies:
   ```bash
   npm install
   ```

## Getting Started

Start the development server:
  ```bash
  npm start
  ```
The server will start locally on `http://localhost:8001`.

## API Endpoints

### 1. Generate a Short URL
- **URL**: `/url`
- **Method**: `POST`
- **Body**: JSON
  ```json
  {
    "url": "https://www.example.com"
  }
  ```
- **Response**:
  ```json
  {
    "id": "jQjHpVwgT"
  }
  ```

### 2. Redirect to Original URL
- **URL**: `/:shortId`
- **Method**: `GET`
- **Description**: Navigating to `http://localhost:8001/jQjHpVwgT` in your browser will automatically redirect you to the original full-length URL.

### 3. Get Analytics
- **URL**: `/url/analytics/:shortId`
- **Method**: `GET`
- **Response**:
  ```json
  {
    "totalClicks": 6,
    "analytics": [
      { "timeStamp": 1773339810811, "_id": "..." },
      { "timeStamp": 1773339923428, "_id": "..." }
    ]
  }
  ```
