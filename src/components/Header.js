import { useEffect, useState } from "react";
import Logo from "../assets/taskitlogo.png"
import './Header.css';

export const Header = () => {
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme")) || "ligte");

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
    document.documentElement.removeAttribute("class");
    document.documentElement.classList.add(theme);
  }, [theme]);

  
  return (
    <header>
        <div className="logo">
            <img src={Logo} alt="TaskIt Logo" />
            <span>TaskeIt</span>
        </div>
        <div className="themeSelector">
            <span onClick={() => setTheme("light")} className={theme === "light" ? "light activeTheme" : "light"}></span>
            <span onClick={() => setTheme("medium")} className={theme === "medium" ? "medium activeTheme" : "medium"}></span>
            <span onClick={() => setTheme("dark")} className={theme === "dark" ? "dark activeTheme" : "dark"}></span>
            <span onClick={() => setTheme("g1")} className={theme === "g1" ? "g1 activeTheme" : "g1"}></span>
            <span onClick={() => setTheme("g2")} className={theme === "g2" ? "g2 activeTheme" : "g2"}></span>
            <span onClick={() => setTheme("g3")} className={theme === "g3" ? "light activeTheme" : "g3"}></span>
        </div>
    </header>
  )
}
