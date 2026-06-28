import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import FeaturedProducts from "@/components/landing-page/feature-products";
import HeroSection from "@/components/landing-page/hero-section";
import StatsCard from "@/components/landing-page/stats-card";
import Image from "next/image";

export default function Home() {
  return (
     <div>
   <HeroSection />
  <FeaturedProducts/>

     </div>

  );
}