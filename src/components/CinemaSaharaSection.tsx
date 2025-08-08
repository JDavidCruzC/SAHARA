import { useState } from "react";
import { Play, Star, Heart, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CinemaSaharaSection() {
  const [selectedMovie, setSelectedMovie] = useState<number | null>(null);

  const movies = [
    {
      title: "Rápidos y Furiosos",
      emoji: "🏎️",
      description: "Velocidad, familia y mucha acción",
      saharaQuote: "Sahara cocina más rápido que Toretto conduce"
    },
    {
      title: "John Wick",
      emoji: "🔫",
      description: "Acción elegante y precisión letal",
      saharaQuote: "Con la misma precisión que pinta sus obras maestras"
    },
    {
      title: "Diario de una Pasión",
      emoji: "💌",
      description: "Romance eterno que trasciende el tiempo",
      saharaQuote: "Tan romántica como sus recetas hechas con amor"
    },
    {
      title: "Piratas del Caribe",
      emoji: "🏴‍☠️",
      description: "Aventuras en alta mar llenas de magia",
      saharaQuote: "Más aventurera que Jack Sparrow (y mejor cocinera)"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-pacifico text-pink-deep mb-4">
            Cine Sahara 🎬
          </h2>
          <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 text-lg">
            Sus películas favoritas con un toque especial
          </p>
        </div>

        {/* Movies grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {movies.map((movie, index) => (
            <Card 
              key={index}
              className={cn(
                "p-6 cursor-pointer transition-all duration-300 hover:shadow-magical",
                "hover:scale-105 hover:-translate-y-2",
                selectedMovie === index && "ring-2 ring-pink-bright shadow-magical"
              )}
              onClick={() => setSelectedMovie(selectedMovie === index ? null : index)}
            >
              <div className="text-center space-y-4">
                <span className="text-6xl block animate-float">{movie.emoji}</span>
                <h3 className="font-pacifico text-lg text-blue-bright">
                  {movie.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {movie.description}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Ver detalles
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Selected movie details */}
        {selectedMovie !== null && (
          <Card className="p-8 bg-gradient-hero text-white animate-scale-in">
            <div className="text-center space-y-4">
              <span className="text-8xl block animate-bounce-soft">
                {movies[selectedMovie].emoji}
              </span>
              <h3 className="text-3xl font-pacifico">
                {movies[selectedMovie].title}
              </h3>
              <p className="text-lg opacity-90">
                {movies[selectedMovie].description}
              </p>
              <div className="bg-white/20 p-4 rounded-lg">
                <p className="italic text-lg">
                  "{movies[selectedMovie].saharaQuote}"
                </p>
              </div>
            </div>
          </Card>
        )}

        {/* Special movie section */}
        <div className="mt-16">
          <Card className="p-8 bg-gradient-magic text-white text-center space-y-6 animate-rainbow">
            <div className="flex justify-center items-center space-x-4">
              <Star className="w-8 h-8 animate-sparkle" />
              <span className="text-6xl">🎭</span>
              <Star className="w-8 h-8 animate-sparkle delay-300" />
            </div>
            
            <h3 className="text-4xl font-pacifico">
              Sahara: La Película
            </h3>
            
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Una chica que puede cocinar mejor que Toretto, pintar más que Jack Sparrow borracho,
              y tiene más poder que Goku en Ultra Instinto.
            </p>
            
            <div className="flex justify-center items-center space-x-8 pt-4">
              <div className="text-center">
                <Heart className="w-6 h-6 mx-auto mb-2 animate-sparkle" />
                <p className="text-sm">Romance épico</p>
              </div>
              <div className="text-center">
                <Zap className="w-6 h-6 mx-auto mb-2 animate-sparkle delay-150" />
                <p className="text-sm">Acción intensa</p>
              </div>
              <div className="text-center">
                <Star className="w-6 h-6 mx-auto mb-2 animate-sparkle delay-300" />
                <p className="text-sm">Magia pura</p>
              </div>
            </div>
            
            <Button 
              className="bg-white text-pink-deep hover:bg-white/90 text-lg px-8 py-3"
            >
              <Play className="w-5 h-5 mr-2" />
              Solo en cines del corazón
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}