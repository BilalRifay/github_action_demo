"use client"

import { GithubIcon, GoalIcon, Lock, Mail } from "lucide-react";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-center text-2xl font-semibold mb-4">Login</h2>
        <form className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full pl-10 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full pl-10 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700">Login</button>
        </form>
        <div className="mt-4 flex items-center justify-between">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-500">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>
        <div className="mt-4 flex space-x-3">
          <button className="w-full flex items-center justify-center border p-2 rounded-md hover:bg-gray-100">
            <GithubIcon className="mr-2 h-5 w-5" /> GitHub
          </button>
          <button className="w-full flex items-center justify-center border p-2 rounded-md hover:bg-gray-100">
            <GoalIcon className="mr-2 h-5 w-5" /> Google
          </button>
        </div>
      </div>
    </div>
  );
}
