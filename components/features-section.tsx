import React from "react";
import { features } from "./hero-section";

export default function Features() {
  return (
    <section
      id="features"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Powerful Features
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Everything you need for seamless communication, designed for the
            mobile-first world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 bg-white hover:bg-gray-50 border border-gray-200 dark:bg-gray-900 dark:hover:bg-gray-800 dark:border-gray-800 shadow-lg hover:shadow-2xl"
            >
              <div className="text-center">
                <div className="inline-flex p-4 rounded-2xl mb-4 transition-all duration-300 group-hover:scale-110 bg-gradient-to-br from-blue-500/10 to-purple-600/10 text-blue-600 dark:from-blue-500/20 dark:to-purple-600/20 dark:text-blue-400">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
