import { Globe, Star, Users, Zap } from "lucide-react";
import React from "react";

export default function StatsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            {
              number: "10M+",
              label: "Active Users",
              icon: <Users className="w-8 h-8" />,
            },
            {
              number: "99.9%",
              label: "Uptime",
              icon: <Zap className="w-8 h-8" />,
            },
            {
              number: "50+",
              label: "Countries",
              icon: <Globe className="w-8 h-8" />,
            },
            {
              number: "4.9★",
              label: "App Rating",
              icon: <Star className="w-8 h-8" />,
            },
          ].map((stat, index) => (
            <div key={index} className="group">
              <div className="inline-flex p-3 rounded-xl mb-4 transition-all duration-300 group-hover:scale-110 bg-gradient-to-br from-blue-500/10 to-purple-600/10 text-blue-600 dark:from-blue-500/20 dark:to-purple-600/20 dark:text-blue-400">
                {stat.icon}
              </div>
              <div className="text-3xl lg:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
