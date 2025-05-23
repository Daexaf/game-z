import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import { ThemeContext } from "./context/ThemeContext";
import DetailGame from "./pages/DetailGame";
import { Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    setTheme(
      localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
    );
  }, []);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        className={`${theme} ${
          theme == "dark" ? "bg-[#121212] min-h-[100vh]" : null
        }`}
      >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game/:id" element={<DetailGame />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
