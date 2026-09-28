import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ProjectDemo from "./pages/ProjectDemo";

import Navbar from "./components/Navbar";
import ScrollTop from "./components/ScrollTop";

import { useState, useEffect } from "react";
import Loader from "./components/Loader";


function App() {


  const [loading, setLoading] = useState(true);



  useEffect(() => {


    const timer = setTimeout(() => {

      setLoading(false);

    }, 2000);



    return () => clearTimeout(timer);


  }, []);





  if (loading) {

    return <Loader />;

  }





  return (

    <BrowserRouter>


      <Navbar />



      <Routes>


        <Route

          path="/"

          element={<Home />}

        />



        <Route

          path="/about"

          element={<About />}

        />



        <Route

          path="/projects"

          element={<Projects />}

        />



        <Route

          path="/contact"

          element={<Contact />}

        />



        <Route

          path="/project-demo"

          element={<ProjectDemo />}

        />


      </Routes>




      <ScrollTop />


    </BrowserRouter>

  );

}


export default App;