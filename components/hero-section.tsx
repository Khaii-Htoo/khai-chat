"use cleint";
import {
  ArrowRight,
  Calendar,
  Download,
  MessageCircle,
  Play,
  Users,
  Video,
} from "lucide-react";
import React, { useEffect, useState } from "react";

export const features = [
  {
    icon: <MessageCircle className="w-8 h-8" />,
    title: "Direct Chat",
    description: "Lightning-fast messaging with end-to-end encryption",
  },
  {
    icon: <Video className="w-8 h-8" />,
    title: "Video Calls",
    description: "Crystal clear HD video calls with zero lag",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Group Chat",
    description: "Connect with unlimited friends in group conversations",
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    title: "Meet & Schedule",
    description: "Plan and organize meetings with integrated calendar",
  },
];

export const HeroSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
                Connect
              </span>
              <br />
              <span className="text-gray-900 dark:text-white">
                Beyond Boundaries
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Experience the future of communication with lightning-fast
              messaging, crystal-clear video calls, and seamless group
              collaboration.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center space-x-2">
                <Download className="w-5 h-5" />
                <span className="font-semibold">Download Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>

              <button className="group flex items-center space-x-2 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 bg-gray-100 hover:bg-gray-200 text-gray-900 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white shadow-lg border border-gray-200 dark:border-gray-700">
                <Play className="w-5 h-5" />
                <span className="font-semibold">Watch Demo</span>
              </button>
            </div>

            {/* Animated Phone Mockup */}
            <div className="relative max-w-sm mx-auto">
              <div className="relative z-10 transform hover:scale-105 transition-all duration-500 bg-white dark:bg-gray-800 rounded-3xl p-2 shadow-2xl border border-gray-100 dark:border-gray-700">
                <div className="bg-gray-100 dark:bg-gray-900 rounded-2xl p-6 h-96 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse delay-100"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse delay-200"></div>
                    </div>
                    <div className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                      Online
                    </div>
                  </div>

                  <div className="space-y-3 flex-1">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="flex items-center space-x-3 animate-pulse"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      >
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full"></div>
                        <div className="flex-1 h-3 bg-gray-300 dark:bg-gray-700 rounded"></div>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center space-x-4">
                    {features.map((feature, index) => (
                      <div
                        key={index}
                        className={`p-3 rounded-xl transition-all duration-300 transform hover:scale-110 ${
                          activeFeature === index
                            ? "bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg"
                            : "bg-gray-200 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                        }`}
                      >
                        {React.cloneElement(feature.icon, {
                          className: "w-5 h-5",
                        })}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-pink-500 to-red-500 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-green-500 to-blue-500 rounded-full animate-bounce delay-300"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
