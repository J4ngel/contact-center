"use client"

import { useState, JSX } from "react"
import Image from "next/image"
import Link from "next/link"

export default function LoginPage(): JSX.Element{
  const [email, setEmail] = useState("meghan.tormund@gmail.com")
  const [password, setPassword] = useState("••••••••••••••••")
  const [rememberMe, setRememberMe] = useState(false)

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-100">
      <div className="flex w-full max-w-4xl overflow-hidden rounded-3xl shadow-lg bg-gradient-to-b from-50% from-white to-blue-500 to-50% ">
        {/* Left side - Blue background with illustration */}
        <div className="relative hidden w-1/2 bg-blue-500 rounded-tr-[2.5rem] md:block">
          <div className="flex flex-col justify-between h-full p-8">
            <div className="relative h-full">
              {/* Illustration of person at desk */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Person working at desk"
                  width={300}
                  height={300}
                  className="z-10"
                />
              </div>

              {/* Background elements */}
              <div className="absolute top-20 left-20 w-24 h-8 bg-blue-400 rounded-full opacity-30"></div>
              <div className="absolute top-10 right-20 w-32 h-6 bg-blue-400 rounded-full opacity-30"></div>
            </div>

            {/* Social media icons */}
            <div className="flex justify-center gap-4 mt-auto">
              <Link href="#" className="text-white/70 hover:text-white">
                Facebook
              </Link>
              <Link href="#" className="text-white/70 hover:text-white">
                LinkIn
              </Link>
              <Link href="#" className="text-white/70 hover:text-white">
                Instagram
              </Link>
            </div>

            {/* Copyright text */}
            <div className="mt-4 text-xs text-center text-white/70">
              <p>By Jaime Andrés Angel</p>
              <p>2025</p>
            </div>
          </div>
        </div>

        {/* Right side - Sign in form */}
        <div className="w-full p-8 bg-white rounded-3xl md:w-1/2 md:rounded-bl-[2.5rem]">
          <div className="flex flex-col h-full">
            {/* Logo */}
            <div className="flex justify-center mb-12">
              <h1 className="text-3xl font-bold tracking-wider text-blue-500">Habloo</h1>
            </div>

            {/* Sign in form */}
            <div className="max-w-sm mx-auto">
              <h2 className="mb-8 text-2xl font-semibold">¡Bienvenido de vuelta!</h2>

              <form className="flex flex-col w-full space-y-6 items-center">
                <div className="w-full">
                <label className="text-xs uppercase text-gray-500" htmlFor="user">user</label>
                <input 
                  id="user"
                  className="w-[90%] input-type-1" 
                  type="text"/>
                </div>
                
                <div className="w-full">
                <label className="text-xs uppercase text-gray-500" htmlFor="psd">password</label>
                <input 
                id="psd"
                  className="w-[90%] input-type-1" 
                  type="password"/>
                </div>

                <div className="flex w-full items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="remember"
                      checked={rememberMe}
                      onChange={(checked) => setRememberMe(!!checked)}
                    />
                    <label htmlFor="remember" className="text-sm text-gray-600">
                      Remember me
                    </label>
                  </div>

                  <Link href="#" className="text-sm text-blue-500 hover:underline">
                    Forgot password?
                  </Link>
                </div>

                <div className="flex w-full items-center justify-between pt-4">
                  <div className="text-sm">
                    No account?{" "}
                    <Link href="#" className="text-blue-500 hover:underline">
                      Sign up
                    </Link>
                  </div>

                  <button type="submit" className="px-6 bg-blue-500 hover:bg-blue-600">
                    Sign in '-'
                  </button>
                </div>
              </form>

              {/* Social sign in options */}
              <div className="flex flex-col gap-3 mt-12">
                <button className="flex items-center justify-center w-full gap-2 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-red-500"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 12h8"></path>
                    <path d="M12 8v8"></path>
                  </svg>
                  Sign in with Google
                </button>

                <button className="flex items-center justify-center w-full gap-2 text-sm">
                  F Sign in with Facebook
                </button>

                <button className="flex items-center justify-center w-full gap-2 text-sm">
                  LN Sign in with LinkedIn
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}