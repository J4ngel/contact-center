"use client"

import { useState, JSX } from "react"
import Image from "next/image"
import Link from "next/link"
import { TextField } from "@/components/atoms/TextField"
import { IconButton } from "@/components/atoms/IconButton"
import { FaGithub, FaInstagram, FaLinkedinIn, FaTeamspeak } from "react-icons/fa6"
import { Button } from "@/components/atoms/Button"

export default function LoginPage(): JSX.Element{
  const [rememberMe, setRememberMe] = useState(false)

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-200">
      <div className="flex w-fit md:w-full max-w-4xl overflow-hidden rounded-3xl shadow-lg md:bg-gradient-to-b from-50% from-white to-blue-500 to-50%">
        {/* Left side - Blue background with illustration */}
        <div className="relative hidden w-1/2 bg-blue-500 rounded-tr-[2.5rem] md:block">
          <div className="flex flex-col justify-between h-full p-8">
            <div className="relative h-full">
              {/* Illustration of company logo */}
              <div className="absolute inset-0 flex items-center justify-center pt-10">
                <Image
                  src="/login_image.webp"
                  alt="Company logo"
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
            <div className="flex justify-center gap-8 mt-auto">
              <Link target="_blank" href="https://github.com/J4ngel" className="text-white/70 hover:text-white">
                <FaGithub size={24}/>
              </Link>
              <Link target="_blank" href="https://www.linkedin.com/in/jaime-andres-angel-melgarejo-62a53420a/" className="text-white/70 hover:text-white">
                <FaLinkedinIn size={24}/>
              </Link>
              <Link target="_blank" href="https://www.instagram.com/j_angel06?igsh=YW0xeHp6cmhpb291" className="text-white/70 hover:text-white">
                <FaInstagram size={24}/>
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
            <div className="flex justify-center items-center space-x-3 mb-12 text-blue-500">
              <h1 className="text-3xl font-bold tracking-wider">Habloo</h1>
              <FaTeamspeak size={36}/>
            </div>

            {/* Sign in form */}
            <div className="max-w-sm mx-auto">
              <h2 className="mb-8 text-2xl font-semibold">¡Bienvenido de vuelta!</h2>

              <form className="flex flex-col w-full space-y-6 items-center">
                <TextField placeholder="User" />

                <TextField type="password" placeholder="Password" />

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

                <Button type="submit" className="w-full justify-center" variant="filled" label="Sign in"/>
              </form>

              {/* Social sign in options */}
              <div className="w-full items-center justify-center gap-2 mt-6 md:mt-10 flex select-none">
                <hr className="w-full border-gray-300 rounded-xl"/>
                <p className="text-xs text-nowrap text-gray-500">Or sign up with</p>
                <hr className="w-full border-gray-300 rounded xl"/>
              </div>

              <div className="flex flex-row justify-between gap-3 mt-5">
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