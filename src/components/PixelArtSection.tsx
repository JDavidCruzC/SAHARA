import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function PixelArtSection() {
  const [clicks, setClicks] = useState(0);
  const [isDrawing, setIsDrawing] = useState(false);

  const handleCakeClick = () => {
    setClicks(prev => prev + 1);
  };

  const toggleDrawing = () => {
    setIsDrawing(!isDrawing);
  };

  return (
    <section className="py-20 px-4 bg-gradient-birthday">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-pacifico text-pink-deep mb-4">
            Sus gustos en 8 bits
          </h2>
          <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Recipe Card */}
          <Card className="p-6 space-y-4 hover:shadow-magical transition-all duration-300 hover:scale-105">
            <div className="text-center">
              <span className="text-6xl block mb-4">🍳</span>
              <h3 className="text-xl font-pacifico text-pink-bright mb-2">
                Receta Legendaria
              </h3>
              <div className="text-left space-y-2 text-sm">
                <p><span className="font-semibold">Ingredientes:</span></p>
                <ul className="space-y-1 text-muted-foreground pl-4">
                  <li>• 1 taza de creatividad</li>
                  <li>• 2 cucharadas de amor</li>
                  <li>• Una pizca de magia Dragon Ball</li>
                  <li>• Colores infinitos para decorar</li>
                </ul>
                <p className="text-xs italic pt-2">
                  "El secreto está en cocinar con el corazón" - Sahara
                </p>
              </div>
            </div>
          </Card>

          {/* Cake Clicker Game */}
          <Card className="p-6 space-y-4 hover:shadow-magical transition-all duration-300 hover:scale-105">
            <div className="text-center">
              <h3 className="text-xl font-pacifico text-blue-bright mb-4">
                Clicker de Pastelitos
              </h3>
              <button
                onClick={handleCakeClick}
                className="text-8xl hover:scale-110 transition-transform duration-200 animate-bounce-soft cursor-pointer"
              >
                🧁
              </button>
              <p className="text-lg font-semibold text-pink-bright mt-4">
                Clicks: {clicks}
              </p>
              {clicks >= 10 && (
                <p className="text-sm text-green-bright animate-sparkle">
                  ¡Has desbloqueado el poder pastelero! 🌟
                </p>
              )}
              {clicks >= 25 && (
                <p className="text-sm text-orange-bright animate-rainbow">
                  ¡Sahara estaría orgullosa! ✨
                </p>
              )}
            </div>
          </Card>

          {/* Virtual Canvas */}
          <Card className="p-6 space-y-4 hover:shadow-magical transition-all duration-300 hover:scale-105">
            <div className="text-center">
              <h3 className="text-xl font-pacifico text-green-bright mb-4">
                Lienzo Virtual
              </h3>
              <div 
                className={cn(
                  "w-full h-32 border-2 border-dashed border-pink-bright rounded-lg",
                  "flex items-center justify-center transition-all duration-300",
                  isDrawing ? "bg-gradient-magic" : "bg-pink-soft/30"
                )}
              >
                {isDrawing ? (
                  <div className="text-center animate-sparkle">
                    <span className="text-4xl block">🎨</span>
                    <p className="text-sm text-white font-semibold">
                      ¡Creando magia!
                    </p>
                  </div>
                ) : (
                  <span className="text-4xl">🖌️</span>
                )}
              </div>
              <Button
                onClick={toggleDrawing}
                className="w-full bg-green-bright hover:bg-green-bright/80 text-white"
              >
                {isDrawing ? "Terminar obra" : "Empezar a pintar"}
              </Button>
              {isDrawing && (
                <p className="text-xs text-muted-foreground italic">
                  "Cada trazo cuenta una historia" - Artista Sahara
                </p>
              )}
            </div>
          </Card>
        </div>

        {/* Minecraft section */}
        <div className="mt-12 text-center">
          <Card className="p-8 bg-green-soft/50">
            <span className="text-8xl block mb-4">⛏️</span>
            <h3 className="text-2xl font-pacifico text-green-bright mb-4">
              Aventuras en Minecraft
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Donde la creatividad no tiene límites y cada bloque es una nueva oportunidad 
              para crear algo increíble. ¡Como Sahara en la vida real!
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}