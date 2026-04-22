import { useState, useEffect } from "react";
import NavBar from "@/components/vpn/NavBar";
import HeroSection from "@/components/vpn/HeroSection";
import FeaturesSection from "@/components/vpn/FeaturesSection";
import CompareSection from "@/components/vpn/CompareSection";
import DownloadSection from "@/components/vpn/DownloadSection";

export default function Index() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <div className="min-h-screen" style={{ background: "#0d0b09", color: "#e8e0d0" }}>
      {/* Noise overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px",
        }}
      />

      <NavBar scrolled={scrolled} />
      <HeroSection />
      <FeaturesSection />
      <CompareSection />
      <DownloadSection />
    </div>
  );
}
