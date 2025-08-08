import { useState } from "react";
import { Sparkles, Cake, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  onStartAdventure: () => void;
}

export function HeroSection({ onStartAdventure }: HeroSectionProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-birthday relative overflow-hidden">
      {/* Floating decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Sparkles className="absolute top-20 left-20 text-pink-bright animate-sparkle w-6 h-6" />
        <Heart className="absolute top-32 right-32 text-pink-bright animate-float w-8 h-8" />
        <Cake className="absolute bottom-20 left-32 text-orange-bright animate-bounce-soft w-10 h-10" />
        <Sparkles className="absolute bottom-32 right-20 text-blue-bright animate-sparkle delay-300 w-4 h-4" />
      </div>

      <div className="text-center space-y-8 px-4 max-w-4xl mx-auto relative z-10">
        {/* Main title */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-pacifico text-pink-deep animate-rainbow">
            ¡Bienvenida
          </h1>
          <h2 className="text-4xl md:text-6xl font-pacifico text-blue-bright">
            Sahara Isabella
          </h2>
          <h3 className="text-3xl md:text-5xl font-pacifico text-pink-bright">
            Pampañaupa! 
            <span className="inline-block animate-bounce-soft ml-2">🌟</span>
          </h3>
        </div>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl font-poppins text-foreground/80 max-w-2xl mx-auto leading-relaxed">
          Es una página diseñada solo para ti, porque sí
        </p>

        {/* Action button */}
        <div className="pt-8">
          <Button
            onClick={onStartAdventure}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={cn(
              "text-xl px-8 py-6 rounded-full font-poppins font-semibold",
              "bg-gradient-hero hover:shadow-magical",
              "transform transition-all duration-300",
              "hover:scale-110 hover:-translate-y-2",
              isHovered && "animate-bounce-soft"
            )}
          >
            <Cake className="mr-3 w-6 h-6" />
            Haz clic para empezar la aventura pastelosa...
          </Button>
        </div>

        {/* Birthday decoration */}
        <div className="flex justify-center items-center space-x-4 pt-8">
          <div className="w-2 h-2 bg-pink-bright rounded-full animate-sparkle"></div>
          <div className="w-3 h-3 bg-blue-bright rounded-full animate-sparkle delay-150"></div>
          <span className="text-4xl animate-bounce-soft">🎂</span>
          <div className="w-3 h-3 bg-orange-bright rounded-full animate-sparkle delay-300"></div>
          <div className="w-2 h-2 bg-green-bright rounded-full animate-sparkle delay-450"></div>
        </div>
      </div>
    </section>
  );
}