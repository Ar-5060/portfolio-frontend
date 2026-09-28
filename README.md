# Personal Portfolio Website

A full-stack personal portfolio website built using **React, Spring Boot, and PostgreSQL**.

This project represents my personal portfolio where I showcase my skills, projects, education, and technical experience. The website also includes a contact system that allows visitors to send messages directly through the portfolio. Messages are handled through a Spring Boot REST API and stored in a PostgreSQL database.

---

## Live Demo

**Portfolio Website:**  
https://portfolio-frontend-five-gray.vercel.app

---

## Features

- Responsive design for desktop, tablet, and mobile devices
- Dark theme user interface
- Smooth animations and transitions
- Personal introduction section
- Skills showcase
- Project showcase
- Contact form with backend integration
- REST API communication between frontend and backend
- Contact messages stored in PostgreSQL database
- Cloud-based deployment

---

## Technologies Used

### Frontend

- React.js
- Vite
- Tailwind CSS
- Framer Motion
- React Icons
- Axios

### Backend

- Java
- Spring Boot
- Spring Data JPA
- REST API

### Database

- PostgreSQL
- Neon PostgreSQL Cloud Database

### Deployment

- Frontend: Vercel
- Backend: Render
- Database: Neon PostgreSQL

---

## System Architecture

```
User
 |
 |
React Frontend
 |
 |
Axios API Request
 |
 |
Spring Boot Backend
 |
 |
PostgreSQL Database
```

---

## Project Structure

```
portfolio-project
│
├── portfolio-frontend
│   │
│   ├── public
│   │
│   ├── src
│   │   │
│   │   ├── components
│   │   │
│   │   ├── sections
│   │   │
│   │   ├── services
│   │   │
│   │   └── App.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
│
└── portfolio-backend
    │
    ├── src/main/java
    │   │
    │   ├── controller
    │   ├── entity
    │   ├── repository
    │   └── config
    │
    └── pom.xml
```

---

## Installation and Setup

### Clone Repository

```bash
git clone https://github.com/Ar-5060/portfolio-frontend.git
```

### Frontend Setup

Go to the frontend directory:

```bash
cd portfolio-frontend
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Frontend will run at:

```
http://localhost:5173
```

---

### Backend Setup

Go to the backend directory:

```bash
cd portfolio-backend
```

Run Spring Boot application:

```bash
./mvnw spring-boot:run
```

Backend server will run at:

```
http://localhost:8080
```

---

## API Integration

The frontend communicates with the backend using REST API.

Example endpoint:

```
POST /api/contact
```

Contact form workflow:

1. User submits the contact form
2. React sends data using Axios
3. Spring Boot REST Controller receives the request
4. Data is saved into PostgreSQL database

---

## Deployment

The project is deployed using:

- Vercel for React frontend
- Render for Spring Boot backend
- Neon PostgreSQL for database hosting

---

## Future Improvements

- Add authentication system
- Add admin dashboard for managing messages
- Add more project categories
- Improve SEO optimization
- Add blog section

---

## Author

**Anisur Rahman**

GitHub:  
https://github.com/Ar-5060

LinkedIn:  
https://www.linkedin.com/in/anisur-rahman-swe

---

## License

This project is open source and available for personal learning and development purposes.