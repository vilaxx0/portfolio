import "./App.css";

import { useEffect, useState } from "react";

import Home from "./screens/Home";
import About from "./screens/About";
import Skills from "./screens/Skills";
import Experience from "./screens/Experience";
import Projects from "./screens/Projects";
import Contact from "./screens/Contact";

import Router from "./components/Router";

import { DarkModeButton } from "./components/Buttons";

export default function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div id={theme} className="App scrollbar">
      <DarkModeButton theme={theme} onClick={toggleTheme} />
      <Router />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
