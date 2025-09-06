"use client";
import React, { useState, useEffect } from "react";
import { HeroSection } from "@/components/hero-section";
import Navbar from "@/components/navbar";
import Features from "@/components/features-section";
import StatsSection from "@/components/stats-section";
import DownloadSection from "@/components/download-section";
import FooterSection from "@/components/footer-section";

export default function ChatAppLanding() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen transition-all duration-500 bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      <Navbar />
      <HeroSection />
      <Features />
      <StatsSection />
      <DownloadSection />
      <FooterSection />
    </div>
  );
}
