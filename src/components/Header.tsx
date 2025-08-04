import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import { Theme } from "../types/Product";

const Header: React.FC = () => {
  const { currentTheme, setTheme } = useTheme();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(event.target.value as Theme);
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <h1>ThemeApp</h1>
        </div>
        <nav className="nav">
          <Link to="/" className={`nav-link ${isActive("/") ? "active" : ""}`}>
            Home
          </Link>
          <Link
            to="/about"
            className={`nav-link ${isActive("/about") ? "active" : ""}`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`nav-link ${isActive("/contact") ? "active" : ""}`}
          >
            Contact
          </Link>
        </nav>
        <div className="theme-selector">
          <select
            value={currentTheme}
            onChange={handleThemeChange}
            className="theme-dropdown"
            aria-label="Select theme"
          >
            <option value="minimal">Theme 1 - Minimal</option>
            <option value="dark">Theme 2 - Dark</option>
            <option value="colorful">Theme 3 - Colorful</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
