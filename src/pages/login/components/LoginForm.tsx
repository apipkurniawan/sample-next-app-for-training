import enLocale from "@/locales/en";
import idLocale from "@/locales/id";
import { useRouter } from "next/router";
import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useSessionStore } from "@/store/useSessionStore";

const LoginForm: React.FC = () => {
  const router = useRouter();
  const { setErrorMessage } = useSessionStore();
  const text = router.locale === "id" ? idLocale : enLocale;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setErrorMessage("");
    setLoading(true);

    try {
      const response = await axios.post("/api/login", { username, password });

      setLoading(false);
      if (response.status === 200) {
        Cookies.set("token", response.data.token, { expires: 1, secure: true });
        Cookies.set("role", response.data.role, { expires: 1, secure: true });
        router.push("/");
      } else {
        setError(response.statusText);
      }

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setLoading(false);
      setError("Invalid username or password");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col space-y-4 max-w-md mx-auto"
    >
      <div>
        <label
          htmlFor="username"
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
        disabled={loading}
        className="w-full text-center py-2 px-4 bg-orange-600 text-white font-semibold rounded-md shadow hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-opacity-50"
      >
        {loading ? (
          <span className="flex items-center justify-center">
            {/* Loading Spinner */}
            <svg
              className="animate-spin h-5 w-5 mr-3 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              ></path>
            </svg>
          </span>
        ) : (
          text.button.login
        )}
      </button>
    </form>
  );
};

export default LoginForm;
