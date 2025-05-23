import React, { useState } from "react";

export default function RegisterForm() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;

    try {
      const res = await fetch("http://localhost:8000/register/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
        credentials: "include",
      });

      const data = await res.json();

      if (res.ok) {
        setMessage(data.message);
        window.location.href = "/user";
        setError("");
        e.target.reset();
      } else {
        setMessage("");
        setError(data.error || "Erreur inconnue.");
      }
    } catch {
      setMessage("");
      setError("Une erreur est survenue.");
    }
  }

  return (
    <>
      <h1>Inscription</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nom d’utilisateur :
          <input type="text" name="username" required />
        </label>

        <label>
          Mot de passe :
          <input type="password" name="password" required />
        </label>

        <button type="submit">S’inscrire</button>
      </form>

      {message && <p className="success">{message}</p>}
      {error && <p className="error">{error}</p>}

      <style>{`
        form {
          display: flex;
          flex-direction: column;
          max-width: 300px;
          gap: 1rem;
        }
        input, button {
          padding: 0.5rem;
          font-size: 1rem;
        }
        .success {
          color: green;
        }
        .error {
          color: red;
        }
      `}</style>
    </>
  );
}
