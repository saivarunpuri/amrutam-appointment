import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";

const LoginModal = ({ onClose }) => {
  const { login, signup } = useAppContext();
  
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup form
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username.trim() && password.trim()) {
      login({ username, password });
      onClose();
    }
  };

  const handleSignup = () => {
    if (email.trim() && username.trim() && password.trim()) {
      signup({ email, username, password });
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-sm shadow-md">
        <h2 className="text-xl font-semibold mb-4">{isLogin ? "Login" : "Signup"}</h2>
        
        {!isLogin && (
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 px-4 py-2 rounded mb-4"
          />
        )}
        
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border border-gray-300 px-4 py-2 rounded mb-4"
        />
        
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-gray-300 px-4 py-2 rounded mb-4"
        />
        
        <div className="flex justify-between">
          <button
            onClick={isLogin ? handleLogin : handleSignup}
            className="bg-green-800 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            {isLogin ? "Login" : "Signup"}
          </button>
          <button onClick={onClose} className="text-gray-500 hover:underline">
            Cancel
          </button>
        </div>
        
        <div className="mt-4 text-center">
          <span
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-600 cursor-pointer hover:underline"
          >
            {isLogin ? "Don't have an account? Signup" : "Already have an account? Login"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
