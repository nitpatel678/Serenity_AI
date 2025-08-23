"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Lock, Mail, User } from "lucide-react"; // added User icon
import Link from "next/link";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div
      className="mt-12 mb-8 min-h-screen w-full flex items-center justify-center
      bg-gradient-to-br from-primary/10 via-background to-secondary/30"
    >
      <Container className="flex flex-col items-center justify-center w-full">
        <Card
          className="w-full md:w-7/12 lg:w-6/12 max-w-3xl p-10 md:p-12 
          rounded-3xl shadow-2xl border border-primary/10 
          bg-card/90 backdrop-blur-lg mt-12"
        >
          {/* Header */}
          <div className="mb-8 text-center">
            <h1
              className="text-3xl md:text-4xl font-extrabold 
              bg-gradient-to-r from-primary to-primary/80 
              bg-clip-text text-transparent mb-3 tracking-tight"
            >
              Sign Up
            </h1>
            <p
              className="text-lg md:text-xl text-muted-foreground font-medium 
              max-w-xl mx-auto leading-relaxed"
            >
              Get started! Create your account and continue your journey
              toward clarity and calm with <span className="font-bold">SERENITY</span>.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-base font-semibold mb-1"
              >
                Name
              </label>
              <div className="relative">
                <User
                  className="absolute left-3 top-1/2 -translate-y-1/2 
                  w-5 h-5 text-muted-foreground"
                />
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  className="pl-12 py-3 text-base rounded-xl 
                  bg-card bg-opacity-80 border border-primary 
                  focus:outline-none focus:ring-2 focus:ring-primary 
                  text-white placeholder:text-muted-foreground"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-base font-semibold mb-1"
              >
                Email
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-3 top-1/2 -translate-y-1/2 
                  w-5 h-5 text-muted-foreground"
                />
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="pl-12 py-3 text-base rounded-xl 
                  bg-card bg-opacity-80 border border-primary 
                  focus:outline-none focus:ring-2 focus:ring-primary 
                  text-white placeholder:text-muted-foreground"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-base font-semibold mb-1"
              >
                Password
              </label>
              <div className="relative">
                <Lock
                  className="absolute left-3 top-1/2 -translate-y-1/2 
                  w-5 h-5 text-muted-foreground"
                />
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="pl-12 py-3 text-base rounded-xl 
                  bg-card bg-opacity-80 border border-primary 
                  focus:outline-none focus:ring-2 focus:ring-primary 
                  text-white placeholder:text-muted-foreground"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-base font-semibold mb-1"
              >
                Confirm Password
              </label>
              <div className="relative">
                <Lock
                  className="absolute left-3 top-1/2 -translate-y-1/2 
                  w-5 h-5 text-muted-foreground"
                />
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Re-enter your password"
                  className="pl-12 py-3 text-base rounded-xl 
                  bg-card bg-opacity-80 border border-primary 
                  focus:outline-none focus:ring-2 focus:ring-primary 
                  text-white placeholder:text-muted-foreground"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Button */}
            <Button
              className="w-full py-3 text-base rounded-xl font-bold 
              bg-gradient-to-r from-primary to-primary/80 cursor-pointer 
              shadow-md hover:from-primary/80 hover:to-primary"
              size="lg"
              type="submit"
            >
              Sign Up
            </Button>
          </form>

          {/* Extra navigation */}
          <div className="flex items-center justify-center gap-2 text-sm mt-6">
            <span className="text-muted-foreground">Already have an account?</span>
            <Link href="/login" className="text-primary font-semibold">
              Sign In
            </Link>
          </div>
        </Card>
      </Container>
    </div>
  );
}
