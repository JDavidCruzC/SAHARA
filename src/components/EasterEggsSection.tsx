import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function EasterEggsSection() {
  const [dragonClicks, setDragonClicks] = useState(0);
  const [totalClicks, setTotalClicks] = useState(0);
  const [showSecret, setShowSecret] = useState(false);
  const [paintingProgress, setPaintingProgress] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleDragonClick = () => {
    setDragonClicks(prev => prev + 1);
    setTotalClicks(prev => prev + 1);
  };

  const handlePaintClick = () => {
    setPaintingProgress(prev => {
      const newProgress = Math.min(prev + 10, 100);
      setTotalClicks(prevTotal => prevTotal + 1);
      return newProgress;
    });
  };

  const handleCanvasClick = () => {
    setTotalClicks(prev => prev + 1);
  };

  useEffect(() => {
    if (totalClicks >= 50 && !showSecret) {
      setShowSecret(true);
    }
  }, [totalClicks, showSecret]);

  const getDragonMessage = () => {
    if (dragonClicks === 0) return "🐉 Tócame para descubrir un secreto...";
    if (dragonClicks < 5) return "🐉 Me haces cosquillas... ¡sigue!";
    if (dragonClicks < 10) return "🐉 ¡Sahara es increíble como artista! ⭐";
    if (dragonClicks < 15) return "🐉 Sus recetas son más poderosas que mis esferas ✨";
    return "🐉 ¡Has desbloqueado mi poder! Sahara merece toda la felicidad del universo 💫";
  };

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-pacifico text-pink-deep mb-4">
            Detalles Ocultos 🥚
          </h2>
          <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4">
            Explora y descubre sorpresas especiales...
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Dragon Ball Easter Egg */}
          <Card className="p-6 space-y-4 hover:shadow-magical transition-all duration-300">
            <div className="text-center">
              <h3 className="text-xl font-pacifico text-orange-bright mb-4">
                Dragón Mágico
              </h3>
              <button
                onClick={handleDragonClick}
                className={cn(
                  "text-8xl hover:scale-110 transition-transform duration-200 cursor-pointer",
                  dragonClicks > 5 && "animate-bounce-soft",
                  dragonClicks > 10 && "animate-rainbow"
                )}
              >
                🐉
              </button>
              <p className="text-sm text-center mt-4 min-h-[3rem] flex items-center justify-center">
                {getDragonMessage()}
              </p>
              <div className="text-xs text-muted-foreground">
                Clicks: {dragonClicks}
              </div>
            </div>
          </Card>

          {/* Interactive Painting */}
          <Card className="p-6 space-y-4 hover:shadow-magical transition-all duration-300">
            <div className="text-center">
              <h3 className="text-xl font-pacifico text-blue-bright mb-4">
                Pintura Interactiva
              </h3>
              <div className="relative">
                <div 
                  className={cn(
                    "w-24 h-24 mx-auto rounded-lg border-4 border-dashed border-blue-bright/50",
                    "flex items-center justify-center cursor-pointer transition-all duration-300",
                    paintingProgress > 0 && "border-solid border-blue-bright",
                    paintingProgress >= 100 && "bg-gradient-magic animate-sparkle"
                  )}
                  onClick={handlePaintClick}
                >
                  {paintingProgress >= 100 ? (
                    <span className="text-2xl">🎨✨</span>
                  ) : (
                    <span className="text-4xl">🖼️</span>
                  )}
                </div>
                {paintingProgress > 0 && (
                  <div className="w-full bg-muted rounded-full h-2 mt-4">
                    <div 
                      className="bg-gradient-hero h-2 rounded-full transition-all duration-300"
                      style={{ width: `${paintingProgress}%` }}
                    ></div>
                  </div>
                )}
              </div>
              {paintingProgress >= 100 ? (
                <p className="text-sm text-green-bright animate-sparkle">
                  "El arte nace del corazón" - Sahara Isabella ❤️
                </p>
              ) : (
                <p className="text-sm text-muted-foreground">
                  Haz clic para completar la pintura ({paintingProgress}%)
                </p>
              )}
            </div>
          </Card>

          {/* Click Counter */}
          <Card className="p-6 space-y-4 hover:shadow-magical transition-all duration-300">
            <div className="text-center">
              <h3 className="text-xl font-pacifico text-green-bright mb-4">
                Contador Secreto
              </h3>
              <div 
                className="text-6xl cursor-pointer hover:scale-110 transition-transform duration-200"
                onClick={handleCanvasClick}
              >
                🎯
              </div>
              <div className="space-y-2">
                <p className="text-2xl font-bold text-pink-bright">
                  {totalClicks}
                </p>
                <p className="text-sm text-muted-foreground">
                  clicks totales
                </p>
                {totalClicks >= 25 && totalClicks < 50 && (
                  <p className="text-xs text-blue-bright animate-sparkle">
                    ¡Sigues explorando! 🌟
                  </p>
                )}
              </div>
            </div>
          </Card>
        </div>

        {/* Secret achievement */}
        {showSecret && (
          <Card className="mt-12 p-8 bg-gradient-magic text-white text-center animate-scale-in">
            <div className="space-y-6">
              <div className="text-6xl animate-bounce-soft">🏆</div>
              <h3 className="text-3xl font-pacifico">
                ¡Logro Desbloqueado!
              </h3>
              <p className="text-xl">
                Has explorado todos los secretos
              </p>
              <div className="bg-white/20 p-6 rounded-lg">
                <p className="text-2xl font-pacifico mb-2">
                  🤗 ¡Abrazo Virtual Desbloqueado! 🤗
                </p>
                <p className="text-lg">
                  Este abrazo viene directamente del corazón, 
                  lleno de cariño y buenos deseos para Sahara Isabella
                </p>
              </div>
              <div className="flex justify-center space-x-4">
                <span className="text-2xl animate-float">💝</span>
                <span className="text-2xl animate-float delay-150">✨</span>
                <span className="text-2xl animate-float delay-300">🌟</span>
                <span className="text-2xl animate-float delay-450">💖</span>
              </div>
            </div>
          </Card>
        )}
      </div>
    </section>
  );
}