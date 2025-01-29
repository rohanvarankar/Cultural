"use client"; // Add this at the top of your file

import React, { useState, useEffect } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const savedEmail = localStorage.getItem("userEmail");
    if (savedEmail) {
      setEmail(savedEmail);
      setRememberMe(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    if (!emailRegex.test(email)) {
      setErrorMessage("Invalid email format!");
      return;
    }

    if (!passwordRegex.test(password)) {
      setErrorMessage(
        "Password must be at least 8 characters, include 1 uppercase letter, 1 digit, and 1 special symbol!"
      );
      return;
    }

    if (rememberMe) {
      localStorage.setItem("userEmail", email);
    } else {
      localStorage.removeItem("userEmail");
    }

    setErrorMessage("");
    alert("Login Successful!");
  };

  return (
    <div id="login-container" className="flex flex-col lg:flex-row min-h-screen bg-white text-black">
      <div id="login-form-section" className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div id="login-box" className="w-full max-w-md p-8 rounded-lg shadow-lg bg-white">
          <h2 id="login-title" className="text-4xl font-bold text-center mb-6 text-black">Sign in</h2>
          <p id="login-subtitle" className="text-center mb-4 font-semibold">
            Please login to continue your cultural recommendation journey.
          </p>

          <form id="login-form" className="space-y-6" onSubmit={handleSubmit}>
            <div id="email-container">
              <label id="email-label" className="block text-sm text-black font-medium">Email</label>
              <input
                type="email"
                id="email-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border-2 border-orange-400 rounded-md bg-transparent text-black placeholder-orange-400 focus:outline-none focus:ring-orange-400 focus:border-orange-400 hover:border-orange-500 transition-all duration-300"
                placeholder="Enter your email"
                required
              />
            </div>

            <div id="password-container">
              <label id="password-label" className="block text-sm font-medium text-black">Password</label>
              <input
                type="password"
                id="password-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border-2 border-orange-400 rounded-md bg-transparent text-black placeholder-orange-400 focus:outline-none focus:ring-orange-400 focus:border-orange-400 hover:border-orange-500 transition-all duration-300"
                placeholder="Enter your password"
                required
              />
            </div>

            {errorMessage && (
              <div id="error-message" className="text-red-500 text-sm text-center">{errorMessage}</div>
            )}

            <div id="remember-me-container" className="flex items-center justify-between">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  id="remember-me"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="form-checkbox h-4 w-4 text-orange-400 bg-transparent border-orange-400 focus:ring-orange-400"
                />
                <span className="ml-2 text-sm">Keep me logged in</span>
              </label>
            </div>

            <button
              type="submit"
              id="sign-in-button"
              className="w-full py-2 px-4 text-white bg-orange-400 border-2 border-orange-400 rounded-lg font-semibold hover:bg-orange-500 hover:text-black transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              Sign In
            </button>

            <div id="divider" className="text-center text-sm my-4 text-black">or</div>

            <button
              type="button"
              id="google-sign-in"
              className="w-full py-2 px-4 bg-transparent text-black border-2 border-orange-400 rounded-lg font-semibold hover:bg-orange-400 hover:text-white transition-all duration-300 flex items-center justify-center"
            >
              <img
                src="/google.jpg"
                alt="Google Logo"
                className="w-5 h-5 mr-2"
              />
              Sign in with Google
            </button>
          </form>

          <p id="signup-link" className="mt-6 text-center text-sm text-blue-500">
            Need an account? <a href="#" className="hover:underline">Create one</a>
          </p>
        </div>
      </div>

      <div
        id="background-image"
        className="w-full lg:w-1/2 bg-cover bg-center"
        style={{ backgroundImage: 'url("/cul1.jpg")', height: "100vh" }}
      ></div>
    </div>
  );
}
