import React from "react";
import LoginForm from "./components/LoginForm";
import Toggle from "@/components/ui/ToggleLocale";

const LoginPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
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
