import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { SaharaLegendSection } from "@/components/SaharaLegendSection";
import { PixelArtSection } from "@/components/PixelArtSection";
import { CinemaSaharaSection } from "@/components/CinemaSaharaSection";
import { SpecialMessageSection } from "@/components/SpecialMessageSection";
import { EasterEggsSection } from "@/components/EasterEggsSection";
import { DateEntry } from "@/components/DateEntry";

const Index = () => {
  const [showContent, setShowContent] = useState(false);

  const handleStartAdventure = () => {
    setShowContent(true);
    // Smooth scroll to next section
    setTimeout(() => {
      document.getElementById('legend-section')?.scrollIntoView({ 
        behavior: 'smooth' 
      });
    }, 300);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection onStartAdventure={handleStartAdventure} />
      
      {/* Content sections - show after adventure starts */}
      {showContent && (
        <div className="animate-fade-in">
          <div id="legend-section">
            <SaharaLegendSection />
          </div>
          
          <PixelArtSection />
          
          <CinemaSaharaSection />
          
          <SpecialMessageSection />
          
          <EasterEggsSection />
          
          {/* Memory section with Minecraft images */}
          <section className="py-20 px-4 bg-gradient-birthday">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-5xl font-pacifico text-pink-deep mb-4">
                  Recuerdos Especiales 📸
                </h2>
                <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full"></div>
                <p className="text-muted-foreground mt-4">
                  Momentos que brillan como estrellas
                </p>
              </div>
              
              <DateEntry showMinecraftExample={true} />
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default Index;