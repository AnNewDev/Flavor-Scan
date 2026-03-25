"use client"
import { useState } from "react"
import Link from "next/link"
export default function RegisterPage() {
    return(
        <div className="grid min-h-screen place-items-center bg-gray-100 px-4">
            <div className="w-full max-w-md rounded-xl bg-white p-6 shadow">
                <h2 className="mb-6 text-center text-2xl font-bold">Register</h2>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            className="mt-1 w-full rounded-md border p-2"
                            placeholder="example@gmail.com"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Re-enter Email
                        </label>
                        <input
                            type="email"
                            className="mt-1 w-full rounded-md border p-2"
                            placeholder="example@gmail.com"
                        />

                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            className="mt-1 w-full rounded-md border p-2"
                            placeholder="Enter your password"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Re-enter Password
                        </label>
                        <input
                            type="password"
                            className="mt-1 w-full rounded-md border p-2"
                            placeholder="Re-enter your password"
                        />

                    </div>
                    <button
                        type="submit"
                        className="w-full rounded-md bg-black px-3 py-2 text-white hover:bg-gray-800"
                    >
                        Register
                    </button>

                </form>
            </div>
        </div>
    )
}
