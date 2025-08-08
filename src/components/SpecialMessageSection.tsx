import { Heart, Sparkles, User } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function SpecialMessageSection() {
  return (
    <section className="py-20 px-4 bg-gradient-birthday">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-pacifico text-pink-deep mb-4">
            Mensaje Especial 💌
          </h2>
          <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full"></div>
        </div>

        {/* Message card */}
        <Card className="relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-10">
            <Sparkles className="absolute top-4 left-4 w-6 h-6 text-pink-bright animate-sparkle" />
            <Heart className="absolute top-4 right-4 w-6 h-6 text-pink-bright animate-float" />
            <Sparkles className="absolute bottom-4 left-4 w-6 h-6 text-blue-bright animate-sparkle delay-300" />
            <Heart className="absolute bottom-4 right-4 w-6 h-6 text-blue-bright animate-float delay-150" />
          </div>

          <div className="p-8 md:p-12 space-y-8 relative z-10">
            {/* Author intro */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="font-pacifico text-2xl text-blue-bright">
                  Juan David Reyes
                </h3>
                <p className="text-sm text-muted-foreground">
                  alias Jeremy David Cruz Centeno 👀
                </p>
              </div>
            </div>

            {/* Main message */}
            <div className="space-y-6 text-center max-w-3xl mx-auto">
              <div className="text-lg md:text-xl leading-relaxed space-y-4 text-foreground/90">
                <p className="font-medium">
                  Yo no sé pintar como tú, ni cocinar tan bien.
                </p>
                <p>
                  Tampoco soy Goku, ni Jack Sparrow,
                </p>
                <p className="text-pink-bright font-semibold text-xl md:text-2xl">
                  Pero sé una cosa:
                </p>
                <p className="text-lg md:text-xl">
                  Alguien como tú merece más que solo páginas web…
                  Merece risas que nazcan sin razón
                  y momentos que parezcan sacados de un sueño..
                </p>
                <p className="font-medium">
                  Así que hice esto...
                  tal vez sin motivo aparente.
                  <span className="text-pink-bright">(o quizás porque tú eres motivo suficiente)</span>.
                </p>
              </div>

              {/* Signature */}
              <div className="pt-8 border-t border-border/50">
                <p className="font-pacifico text-xl text-blue-bright mb-2">
                  Atte. tu amigo (no fake)
                </p>
                <div className="flex items-center justify-center space-x-2">
                  <Heart className="w-5 h-5 text-pink-bright animate-sparkle" />
                  <span className="font-semibold text-lg">Juan David Reyes</span>
                  <Heart className="w-5 h-5 text-pink-bright animate-sparkle delay-300" />
                </div>
                <div><span className="text-pink-bright">(oe queeeeeeee xD)</span></div>
              </div>
            </div>

            {/* Bottom decoration */}
            <div className="flex justify-center items-center space-x-6 pt-8">
              <div className="flex space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={cn(
                      "w-3 h-3 rounded-full animate-sparkle",
                      i % 2 === 0 ? "bg-pink-bright" : "bg-blue-bright"
                    )}
                    style={{ animationDelay: `${i * 200}ms` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Bottom quote */}
        <div className="text-center mt-12">
          <p className="text-2xl font-pacifico text-pink-deep italic">
            "Porque las mejores cosas de la vida no necesitan razón" ✨
          </p>
        </div>
      </div>
    </section>
  );
}