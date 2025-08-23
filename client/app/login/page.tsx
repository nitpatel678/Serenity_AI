"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Lock, Mail } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div
      className="mt-10 mb-10 min-h-screen w-full flex items-center justify-center
      bg-gradient-to-br from-primary/10 via-background to-secondary/30"
    >
      <Container className="flex flex-col items-center justify-center w-full">
        <Card
          className="w-full md:w-7/12 lg:w-6/12 max-w-3xl p-10 md:p-12 
        rounded-3xl shadow-2xl border border-primary/10 
        bg-card/90 backdrop-blur-lg mt-12"
        >
          <div className="mb-8 text-center">
            <h1
              className="text-3xl md:text-4xl font-extrabold 
            bg-gradient-to-r from-primary to-primary/80 
            bg-clip-text text-transparent mb-3 tracking-tight"
            >
              Sign In
            </h1>
            <p
              className="text-lg md:text-xl text-muted-foreground font-medium 
            max-w-xl mx-auto leading-relaxed"
            >
              Welcome back! Sign in to continue your journey toward clarity and
              calm.
            </p>
          </div>

          {/* Form component */}

          <form className="space-y-6">
            {/* Email field */}
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

            {/* Password field */}
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
            {/*Button */}
            <Button
              className="w-full py-2 text-base rounded-xl font-bold bg-gradient-to-r 
  from-primary to-primary/80 cursor-pointer shadown-md hover:from-primary/80 hover:to-primary"
              size="lg"
              type="button"
            >
              Sign In
            </Button>
          </form>

          {/* extra navigation */}

          <div
            className="flex items-center justify-center
        gap-2 text-sm"
          >
            <span className="text-muted-foreground">
              Don't have an account?
            </span>
            <Link
              href="/signup"
              className="text-primary font-semibold 
            "
            >
              Sign Up
            </Link>
            <Link href="/forgot-passowrd" className="ml-5 text-primary">
              Forgot password?
            </Link>
          </div>
        </Card>
      </Container>
    </div>
  );
}
