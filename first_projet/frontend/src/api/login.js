// src/pages/api/login.js
export async function post({ request }) {
  const { email, password } = await request.json();

  // Logique d'authentification, ici on vérifie juste un exemple statique
  if (email === "admin@example.com" && password === "admin123") {
    return new Response(JSON.stringify({ success: true, role: "admin" }), {
      status: 200,
    });
  } else if (email === "user@example.com" && password === "user123") {
    return new Response(JSON.stringify({ success: true, role: "user" }), {
      status: 200,
    });
  }

  // Si l'authentification échoue
  return new Response(JSON.stringify({ success: false }), { status: 401 });
}
