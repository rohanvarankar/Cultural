"use client";

import React, { useState } from "react";

export default function Signup() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match!");
      return;
    }

    setErrorMessage("");
    alert("Signup Successful!");
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white text-black">
      {/* Left Side: Sign-Up Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md p-8 rounded-lg">
          <h2 className="text-4xl font-bold text-center mb-6 text-orange-500 animate-pulse" id="signup-title">
            Sign Up
          </h2>
          <p className="text-center mb-4 font-bold" id="signup-description">
            Create an account to get started!
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name Input */}
            <div>
              <label className="block text-sm font-medium" htmlFor="signup-name">Full Name</label>
              <input
                type="text"
                id="signup-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border-2 border-orange-400 rounded-md bg-transparent text-black placeholder-gray-500 focus:outline-none focus:ring-orange-400 focus:border-orange-400 hover:border-orange-500 transition-all duration-300"
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Username Input */}
            <div>
              <label className="block text-sm font-medium" htmlFor="signup-username">Username</label>
              <input
                type="text"
                id="signup-username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border-2 border-orange-400 rounded-md bg-transparent text-black placeholder-gray-500 focus:outline-none focus:ring-orange-400 focus:border-orange-400 hover:border-orange-500 transition-all duration-300"
                placeholder="Choose a username"
                required
              />
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium" htmlFor="signup-password">Password</label>
              <input
                type="password"
                id="signup-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border-2 border-orange-400 rounded-md bg-transparent text-black placeholder-gray-500 focus:outline-none focus:ring-orange-400 focus:border-orange-400 hover:border-orange-500 transition-all duration-300"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Confirm Password Input */}
            <div>
              <label className="block text-sm font-medium" htmlFor="signup-confirm-password">Confirm Password</label>
              <input
                type="password"
                id="signup-confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border-2 border-orange-400 rounded-md bg-transparent text-black placeholder-gray-500 focus:outline-none focus:ring-orange-400 focus:border-orange-400 hover:border-orange-500 transition-all duration-300"
                placeholder="Confirm your password"
                required
              />
            </div>

            {/* Error Message */}
            {errorMessage && (
              <div className="text-red-500 text-sm text-center" id="signup-error">
                {errorMessage}
              </div>
            )}

            {/* Sign Up Button */}
            <button
              type="submit"
              id="signup-button"
              className="w-full py-2 px-4 text-white bg-orange-500 border-2 border-orange-400 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400 hover:scale-105"
            >
              Sign Up
            </button>
          </form>

          {/* Already have an account? */}
          <p className="mt-6 text-center text-sm text-gray-600" id="signup-login-link">
            Already have an account? <a href="#" className="text-orange-500 hover:underline">Log in</a>
          </p>
        </div>
      </div>

      {/* Right Side: Background Image */}
      <div
        className="w-full lg:w-1/2 bg-cover bg-center"
        style={{ backgroundImage: 'url("/cul2.jpg")', height: "100vh" }}
        id="signup-image"
      ></div>
    </div>
  );
}
