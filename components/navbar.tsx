import { SignInButton, UserButton } from "@clerk/nextjs";
import { Authenticated, Unauthenticated } from "convex/react";
import { MessageCircle, Moon, Sun } from "lucide-react";
import React from "react";
import ThemeToggle from "./theme-toggle";
import Logo from "./logo";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md transition-all duration-300 bg-white/80 border-b border-gray-100 dark:bg-gray-900/80 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Features
            </a>
            <a
              href="#download"
              className="hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Download
            </a>
            <ThemeToggle />
            <Authenticated>
              <UserButton />
            </Authenticated>
            <Unauthenticated>
              <SignInButton>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Login
                </button>
              </SignInButton>
            </Unauthenticated>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />

            <Authenticated>
              <UserButton />
            </Authenticated>
            <Unauthenticated>
              <SignInButton>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105">
                  Login
                </button>
              </SignInButton>
            </Unauthenticated>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
