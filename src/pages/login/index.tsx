import React, { useEffect } from "react";
import LoginForm from "./components/LoginForm";
import Toggle from "@/components/ui/ToggleLocale";
import Cookies from "js-cookie";
import { useSessionStore } from "@/store/useSessionStore";

const LoginPage: React.FC = () => {
  const { errorMessage } = useSessionStore();

  useEffect(() => {
    Cookies.remove("token");
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        {errorMessage && (
          <p className="text-red-600 font-normal mb-2">{errorMessage}</p>
        )}
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
        <div className="flex justify-end">
          <Toggle />
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
