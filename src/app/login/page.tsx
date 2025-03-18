"use client"

import { useState, JSX } from "react"
import Image from "next/image"
import Link from "next/link"
import { TextField } from "@/components/atoms/TextField"
import { IconButton } from "@/components/atoms/IconButton"

export default function LoginPage(): JSX.Element{
  const [rememberMe, setRememberMe] = useState(false)

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-100">
      <div className="flex w-full max-w-4xl overflow-hidden rounded-3xl shadow-lg bg-gradient-to-b from-50% from-white to-blue-500 to-50% ">
        {/* Left side - Blue background with illustration */}
        <div className="relative hidden w-1/2 bg-blue-500 rounded-tr-[2.5rem] md:block">
          <div className="flex flex-col justify-between h-full p-8">
            <div className="relative h-full">
              {/* Illustration of person at desk */}
              <div className="absolute inset-0 flex items-center justify-center pt-10">
                <Image
                  src="/login_image.webp"
                  alt="Person working at desk"
                  width={250}
                  height={250}
                  className="rounded-s-full rounded-br-full rounded-tr-[40rem] z-10"
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
                <TextField placeholder="User" />

                <TextField placeholder="Password" />

                <div className="flex w-full items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="remember"
                      checked={rememberMe}
                      onChange={(checked) => setRememberMe(!rememberMe)}
                    />
                    <label htmlFor="remember" className="text-sm text-gray-600">
                      Remember me
                    </label>
                  </div>

                  <Link href="#" className="text-sm text-blue-500 hover:underline">
                    Forgot password?
                  </Link>
                </div>

                <div className="flex w-full items-center justify-evenly space-x-4 pt-4">
                  <div className="text-sm">
                    No account?{" "}
                    <Link href="/register" className="text-blue-500 hover:underline">
                      Sign up
                    </Link>
                  </div>

                  <button type="submit" className="py-1.5 px-3 bg-blue-500 rounded-xl text-white text-sm hover:bg-blue-600">
                    Sign in ➡️
                  </button>
                </div>
              </form>

              {/* Social sign in options */}
              <div className="w-full hidden items-center justify-center gap-2 mt-10 md:flex">
                <hr className="w-full border-gray-300 rounded-xl"/>
                <p className="text-xs text-nowrap text-gray-500">Or sign up with</p>
                <hr className="w-full border-gray-300 rounded xl"/>
              </div>

              <div className="flex flex-col justify-between gap-3 md:flex-row mt-12 md:mt-5">
                <IconButton icon="./google.svg" />
                
                <IconButton icon="./facebook.svg" />
                
                <IconButton icon="./linkedin.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}