import mess from "../assets/images/mess.png";
import movie from "../assets/images/movie.png";
import fakeNews from "../assets/images/fake-news.png";


export const projects = [

  {
    id:1,

    title:"Smart Mess Management System",

    image:mess,

    description:
    "A full-stack smart mess management system to manage members, meals, expenses and daily activities.",

    tech:[
      "React",
      "Tailwind CSS",
      "Spring Boot",
      "MySQL"
    ],

    github:
    "https://github.com/Ar-5060/smart-mess-management-system",

    live:
    "/project-demo"

  },



  {
    id:2,

    title:"Movie Ticket Booking System",

    image:movie,

    description:
    "A movie ticket booking system that allows users to browse movies, select seats and manage bookings.",

    tech:[
      "Java",
      "Spring Boot",
      "MySQL"
    ],

    github:
    "https://github.com/Ar-5060/Movie-Ticket-Booking-System",

    live:
    "/project-demo"

  },



  {
    id:3,

    title:"Fake News Detection",

    image:fakeNews,

    description:
    "A machine learning based system to detect fake news using NLP techniques.",

    tech:[
      "Python",
      "Machine Learning",
      "NLP"
    ],

    github:
    "https://github.com/Ar-5060/fake-news-detection",

    live:
    "/project-demo"

  }


];