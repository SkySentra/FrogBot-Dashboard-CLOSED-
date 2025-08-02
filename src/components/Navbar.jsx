import { useState, useEffect } from "react";
import Logo from "./logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    fetch("http://37.114.46.24:3000/me", {
      credentials: "include",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Not logged in");
        return res.json();
      })
      .then(setUser)
      .catch(() => setUser(null));
  }, []);

  const handleDashboardClick = (e) => {
    e.preventDefault();
    if (user) {
      window.location.href = "/dashboard";
    } else {
      window.location.href = "http://37.114.46.24:3000/auth/discord";
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-md transition-colors duration-300 ${
        scrolled ? "bg-black bg-opacity-90 shadow-md" : "bg-black bg-opacity-90"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        <div className="flex items-center space-x-3">
          <img
            src={Logo}
            alt="FrogBot Logo"
            className={`transition-all duration-300 ${scrolled ? "h-6 w-6" : "h-12 w-12"}`}
          />
          <div className="text-2xl font-bold tracking-wide">FrogBot</div>
        </div>

        <ul className="flex space-x-8 text-lg">
          <li>
            <a href="/" className="hover:text-green-400 transition">
              Startseite
            </a>
          </li>
          <li>
            <a href="#features" className="hover:text-green-400 transition">
              Features
            </a>
          </li>
          <li>
            <a href="#" onClick={handleDashboardClick} className="hover:text-green-400 transition">
              Dashboard
            </a>
          </li>
          <li>
            <a href="/auth" className="hover:text-green-400 transition">
              Einladen
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
