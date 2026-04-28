# URL Shortener UI (React)

A simple React frontend for interacting with the URL Shortener Spring Boot API.

###  🚀Features
```
Shorten a long URL
Optional custom alias support
View all shortened URLs
Redirect to original URL
Delete a shortened URL
Error handling
```
### 🛠️ Tech Stack
React (Vite)
Axios (API calls)
JavaScript (ES6+)
📦 Prerequisites

### Make sure you have installed:
```
Node.js (v18+ recommended)
npm or yarn
Backend API running (Spring Boot URL Shortener)
```
### ⚙️ Setup Instructions

1. Clone the repository
   git clone <your-repo-url>
   cd url-shortener-ui
2. Install dependencies
   npm install
3. Start the development server
   npm run dev
4. Open the application
   http://localhost:5174
   🔗 Backend Configuration

The frontend expects the backend API to be running at:
http://localhost:8080

If your backend runs on a different port, update:
src/api/urlApi.js
const API_BASE = "http://localhost:8080";

### 🌐 CORS Configuration (IMPORTANT)
```
If you see CORS errors, update your Spring Boot backend:

@CrossOrigin(origins = "http://localhost:5174")
Or configure globally via WebMvcConfigurer.
```
###  🧪 Available Scripts
```
npm run dev       # Start dev server
npm run build     # Build production bundle
npm run preview   # Preview production build
```
### 📁 Project Structure
```
src/
├── api/           # API layer (Axios)
├── components/    # UI components
├── App.jsx        # Main app
└── main.jsx       # Entry point
```
### 🔄 How It Works
```
Action	Endpoint
Shorten URL	POST /shorten
Get all URLs	GET /urls
Redirect	GET /{alias}
Delete URL	DELETE /{alias}
```
### ⚠️ Common Issues
```
❌ CORS Error

Fix backend configuration (see above)

❌ Backend not running

Ensure Spring Boot app is running on port 8080

❌ Port mismatch

Update API base URL in urlApi.js
```

### 💡 Future Improvements
```
Add pagination for URL list
Copy-to-clipboard button
UI enhancements (Tailwind / Material UI)
Authentication (JWT)
```
### 🧑‍💻 Author

Upendra Kumbham