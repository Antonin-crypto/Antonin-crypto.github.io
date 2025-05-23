import React, { useState } from "react";

// Fonction pour lire le token CSRF depuis les cookies
function getCSRFToken() {
  const match = document.cookie.match(/csrftoken=([^;]+)/);
  return match ? match[1] : null;
}

export default function LoginForm() {
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    const csrfToken = getCSRFToken();

    try {
      const res = await fetch("http://localhost:8000/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": csrfToken, // 🛡️ Token ici
        },
        credentials: "include", // 🔐 pour envoyer les cookies
        body: JSON.stringify({ username, password }),
      });

      if (res.ok) {
        window.location.href = "http://localhost:4321/user"; // Redirection après login
      } else {
        const data = await res.json();
        setError(data?.error || "Erreur de connexion.");
      }
    } catch (err) {
      setError("Erreur réseau.");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Nom d’utilisateur"
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Mot de passe"
        required
      />
      <button type="submit">Se connecter</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}
