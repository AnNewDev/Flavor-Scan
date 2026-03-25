"use client"

import { useState } from "react"
import Link from "next/link"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })

    const data = await res.json()
    setMessage(data.message)

    
  }

  {/* VALIDATION FOR EMAIL */}
  function isValidEmail(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }
  return (
    <div className="grid min-h-screen place-items-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow">
        <h2 className="mb-6 text-center text-2xl font-bold">Login</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* EMAIL INPUT + CONSTANT */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-md border p-2"
              placeholder="example@gmail.com"
            />
          </div>

          {/* PASSWORD INPUT + CONSTANT */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded-md border p-2"
              placeholder="********"
            />
          </div>

          {/* LOGIN BUTTON + CONSTANT */}
          <button
            type="submit"
            className="w-full rounded-md bg-black px-3 py-2 text-white hover:bg-gray-800"
          >
            Login
          </button>

          {/* MESSAGE */}
          {message && (
            <p className="text-center text-sm text-gray-600">{message}</p>
          )}
        </form>

        {/* LINKS */}
        <p className="mt-4 text-sm">
          <Link href="/register" className="text-indigo-600 hover:text-indigo-500">
            Don't have an account? Sign up
          </Link>
        </p>

        <p className="mt-2 text-sm text-gray-600">
          Forgot your password?{" "}
          <Link href="/forgot-password" className="text-indigo-600 hover:text-indigo-500">
            Reset it
          </Link>
        </p>
      </div>
    </div>
  )
}