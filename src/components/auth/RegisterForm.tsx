import React, { useState } from "react";
import { register, getUser } from "../../services/api";

export function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password !== passwordConfirm) {
      setError("Passwords do not match");
      return;
    }

    try {
      // Register the user and receive a token
      const response = await register(name, email, password, passwordConfirm);
      const token = response.data.access_token;
      // Store token in localStorage or sessionStorage (your choice)
      localStorage.setItem("auth_token", token);
      // Get authenticated user data using token
      const userResponse = await getUser(token);
      setUser(userResponse.data);
    } catch (err: any) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  if (user) {
    return <div>Welcome, {user.name}!</div>;
  }

  return (
    <div className="min-h-screen bg-purple-700 flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow-xl p-10 max-w-md w-full"
      >
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Register
        </h2>

        {error && (
          <p className="text-red-500 text-center mb-4">{error}</p>
        )}

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full mb-5 px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-purple-400"
        />

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full mb-5 px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-purple-400"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full mb-5 px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-purple-400"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          required
          className="w-full mb-7 px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-purple-400"
        />

        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-800 text-white font-semibold py-3 rounded-lg transition duration-300"
        >
          Register
        </button>
      </form>
    </div>
  );
}
