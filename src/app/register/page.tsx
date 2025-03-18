'use client'
import { Button } from "@/components/atoms/Button";
import { IconButton } from "@/components/atoms/IconButton";
import { TextField } from "@/components/atoms/TextField";
import Image from "next/image";
import Link from "next/link";
import { JSX, useState } from "react";

export default function RegisterPage(): JSX.Element{

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
            <div className="min-w-64 max-w-sm mx-auto">
              <h2 className="mb-8 text-2xl font-semibold text-center">Nuevo usuario</h2>

              <form className="flex flex-col w-full space-y-6 items-center">
                <TextField placeholder="User" />

                <TextField placeholder="Email" />

                <TextField placeholder="Password" />

                <TextField placeholder="Check your password" />

                <div className="flex w-full items-center justify-evenly">
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="role"
                      id="admin-role"
                    />
                    <label htmlFor="admin-role" className="text-sm text-gray-600">
                      Administrador
                    </label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="role"
                      id="agent-role"
                    />
                    <label htmlFor="agent-role" className="text-sm text-gray-600">
                      Agente
                    </label>
                  </div>
                </div>

                <div className="flex w-full justify-evenly">
                  <Button label="Volver" />
                  <Button label="Registrar" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}