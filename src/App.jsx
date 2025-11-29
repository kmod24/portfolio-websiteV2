import './App.css'
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Hobbies } from "./components/Hobbies";

import { Blogs } from "./components/Blogs";
import { BlogPost } from "./components/BlogPost";


function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);  

  return (
    <div className={`app ${isLoaded ? "loaded" : ""}`}>
      <NavBar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:slug" element={<BlogPost />} />
        <Route path="/hobbies" element={<Hobbies />} />
      </Routes>

        <p className='copyright-label'> &copy; 2025 Kyle Modina. All rights reserved.</p>
    </div>
  );
}

export default App;
