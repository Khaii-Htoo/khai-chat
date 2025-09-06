import { SignInButton, UserButton } from "@clerk/nextjs";
import { Authenticated, Unauthenticated } from "convex/react";
import { MessageCircle, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  const isDark = theme === "dark";
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md transition-all duration-300 bg-white/80 border-b border-gray-100 dark:bg-gray-900/80 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center transform rotate-12 transition-all duration-300 bg-gradient-to-br from-blue-600 to-purple-700 dark:from-blue-500 dark:to-purple-600">
              <MessageCircle className="w-6 h-6 text-white transform -rotate-12" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ChatFlow
            </span>
          </div>

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
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg transition-all duration-300 hover:scale-110 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
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
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg transition-all duration-300 bg-gray-100 dark:bg-gray-800"
            >
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

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
