import React, { useState } from "react";
import { login, getUser } from "../../services/api";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      // Login request (expecting token in response)
      const response = await login(email, password);
      const token = response.data.access_token;

      // Save token (localStorage or sessionStorage)
      localStorage.setItem("auth_token", token);

      // Fetch user using token
      const userResponse = await getUser(token);
      setUser(userResponse.data);
    } catch (err: any) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  if (user) {
    return <div>Welcome, {user.name}!</div>;
  }

  return (
   <div>
    <div className="text-2xl text-green-500 font-bold">Tailwind is working!</div>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white text-black dark:bg-gray-800 dark:text-white rounded shadow-md">
        {error && <p className="text-red-500">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          required
        />
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Login
        </button>
      </form>
   </div>

  );
}
