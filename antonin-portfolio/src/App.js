import React, { useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaFile } from "react-icons/fa";
import "./App.css";
import my_photo from "../src/images/my_photo.jpg";
import GameCard from "./GameCard";

function App() {
  useEffect(() => {
    const icons = document.querySelectorAll(".icon");
    const handleScroll = () => {
      icons.forEach((icon) => {
        if (icon.getBoundingClientRect().top < window.innerHeight) {
          icon.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="app-container">
      <img
        src={my_photo}
        alt="Antonin Paillasse"
        className="fade-in profile-image"
      />
      <h1 className="fade-in">Antonin Paillasse</h1>

      <p className="intro-text">
        Bonjour Je suis un développeur passionné par l'univers des jeux vidéo et
        de la technologie. En tant que créateur de Galaxia Arkada, ma plateforme
        de jeux, j'aspire à offrir une expérience immersive où les utilisateurs
        peuvent partager leurs propres jeux.
      </p>
      <GameCard />
      <div className="icon-container">
        <div className="icon visible">
          <FaGithub className="icon-style" />
          <a
            href="https://github.com/Antonin-crypto"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
        <div className="icon visible">
          <FaLinkedin className="icon-style" style={{ color: "#0077b5" }} />
          <a
            href="https://www.linkedin.com/in/antonin-paillasse-217418360/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <div className="icon visible">
          <FaEnvelope className="icon-style" />
          <a href="mailto:antoninpaillasse951@gmail.com">Email</a>
        </div>
        <div className="icon visible">
          <FaFile className="icon-style" />
          <a
            href="https://www.canva.com/design/DAGMBya27jw/7NvsxmbR7K9oqkYc0iyMRw/edit"
            target="_blank"
            rel="noopener noreferrer"
          >
            CV
          </a>
        </div>
        <div className="icon visible">
          <FaGithub className="icon-style" />
          <a
            href="https://github.com/Grilindor/Galaxia_Arkada"
            target="_blank"
            rel="noopener noreferrer"
          >
            Galaxia Arkada
          </a>
        </div>
      </div>

      <footer className="footer">
        © 2025 Antonin Paillasse. Tous droits réservés.
      </footer>
    </div>
  );
}

export default App;
