// components/LoginForm.tsx
import enLocale from "@/locales/en";
import idLocale from "@/locales/id";
import { useRouter } from "next/router";
import React, { useState } from "react";
// import axios from "axios";

const LoginForm: React.FC = () => {
  const router = useRouter();
  const text = router.locale === "id" ? idLocale : enLocale;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    router.push("/");
    // try {
    //   const response = await axios.post("/api/login", { email, password });
    //   console.log(response.data);
    //   // Handle successful login here (e.g., redirect)
    // } catch (err) {
    //   setError("Invalid email or password");
    // }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col space-y-4 max-w-md mx-auto"
    >
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Username
        </label>
        <input
          type="username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="mt-1 block border p-3 w-full border-gray-300 outline-none rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 outline-none"
        />
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <button
        type="submit"
        className="w-full py-2 px-4 bg-orange-600 text-white font-semibold rounded-md shadow hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-opacity-50"
      >
        {text.button.login}
      </button>
    </form>
  );
};

export default LoginForm;
