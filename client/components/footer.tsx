"use client";

import { Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t py-8 bg-background/60 backdrop-blur-sm">
      <div className="container flex flex-col items-center gap-4 px-4 md:px-6 text-center">
        
        {/* Social Icons */}
        <div className="flex gap-6">
          <a
            href="https://github.com/nitpatel678"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/nitinpatelftp/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Serenity. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
