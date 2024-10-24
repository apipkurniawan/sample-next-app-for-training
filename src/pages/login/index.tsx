import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import Toggle from "@/components/ui/toggle";

const LoginPage: React.FC = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = (checked: boolean) => {
    setIsToggled(checked);
    // Add any additional logic for toggling
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
        <div className="flex flex-row justify-end gap-2 items-center">
          <div className="text-sm">EN/ID</div>
          <Toggle isChecked={isToggled} onToggle={handleToggle} />
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
