import { Heart, Lock, Play, Shield, Smartphone } from "lucide-react";

import React from "react";

export default function DownloadSection() {
  return (
    <section
      id="download"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Ready to Connect?
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Join millions of users worldwide and experience the future of
            communication.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <button className="group bg-black text-white px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center space-x-3">
              <Smartphone className="w-6 h-6" />
              <div className="text-left">
                <div className="text-xs opacity-70">Download on the</div>
                <div className="text-lg font-semibold">App Store</div>
              </div>
            </button>

            <button className="group bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center space-x-3">
              <div className="w-6 h-6 bg-white rounded text-green-600 flex items-center justify-center">
                <Play className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-xs opacity-70">Get it on</div>
                <div className="text-lg font-semibold">Google Play</div>
              </div>
            </button>
          </div>

          <div className="flex flex-wrap justify-center items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center space-x-2">
              <Lock className="w-4 h-4" />
              <span>End-to-end encrypted</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4" />
              <span>Privacy focused</span>
            </div>
            <div className="flex items-center space-x-2">
              <Heart className="w-4 h-4" />
              <span>Made with love</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
