import { Calendar, Palette, ChefHat, Gamepad2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function SaharaLegendSection() {
  const traits = [
    {
      icon: Calendar,
      label: "Fecha de nacimiento",
      value: "7 de agosto de 2002",
      color: "text-pink-bright"
    },
    {
      icon: Gamepad2,
      label: "Fan de",
      value: "Dragon Ball ⚡",
      color: "text-orange-bright"
    },
    {
      icon: Palette,
      label: "Le encanta",
      value: "Pintar 🎨",
      color: "text-blue-bright"
    },
    {
      icon: ChefHat,
      label: "Especialista en",
      value: "Cocinar 👩‍🍳",
      color: "text-green-bright"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-pacifico text-pink-deep mb-4">
            Sahara: La Leyenda
          </h2>
          <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full"></div>
        </div>

        {/* Avatar section */}
        <div className="text-center mb-12">
          <div className="relative inline-block">
            <div className="w-32 h-32 bg-gradient-magic rounded-full mx-auto mb-6 flex items-center justify-center animate-float">
              <span className="text-6xl">👩‍🎨</span>
            </div>
            {/* Aura effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-magic opacity-20 animate-pulse scale-110"></div>
          </div>
          
          <h3 className="text-3xl font-pacifico text-blue-bright mb-2">
            Sahara Isabella
          </h3>
          <p className="text-lg font-poppins text-muted-foreground">
            alias: La Artista Culinaria ✨
          </p>
        </div>

        {/* Traits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {traits.map((trait, index) => (
            <Card 
              key={index}
              className={cn(
                "p-6 text-center space-y-4 hover:shadow-magical transition-all duration-300",
                "hover:scale-105 hover:-translate-y-2"
              )}
            >
              <trait.icon className={cn("w-8 h-8 mx-auto", trait.color)} />
              <div>
                <p className="text-sm text-muted-foreground font-medium mb-1">
                  {trait.label}
                </p>
                <p className="font-semibold text-foreground">
                  {trait.value}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Special achievements */}
        <div className="text-center space-y-6">
          <div className="bg-gradient-hero p-6 rounded-2xl text-white shadow-magical">
            <h4 className="text-2xl font-pacifico mb-4">Logros Especiales</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <span className="text-3xl block">🍳</span>
                <p className="font-semibold">Sahara cocinó</p>
                <p className="text-lg">7 sonrisas</p>
              </div>
              <div className="space-y-2">
                <span className="text-3xl block">💎</span>
                <p className="font-semibold">Desbloqueó</p>
                <p className="text-lg">1 corazón</p>
              </div>
              <div className="space-y-2">
                <span className="text-3xl block">⚡</span>
                <p className="font-semibold">Nivel de poder</p>
                <p className="text-lg">Ultra Instinto</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}