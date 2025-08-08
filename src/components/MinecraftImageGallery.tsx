import { useState } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface MinecraftImageGalleryProps {
  className?: string;
}

const minecraftImages = [
  {
    url: "/lovable-uploads/b97efbee-7363-4fbb-88f5-11ca2fc0383c.png",
    alt: "Minecraft - Casa con dragón y sombrilla",
    description: "Aventuras en casa con nuestro compañero dragón"
  },
  {
    url: "/lovable-uploads/7cea4491-5777-4370-9034-cb408e10c95f.png", 
    alt: "Minecraft - Galería de personajes",
    description: "Nuestra galería especial con Steve y Creeper"
  },
  {
    url: "/lovable-uploads/9618e626-d33e-4b21-96c6-bf568f3ea4e1.png",
    alt: "Minecraft - Aventura en bote",
    description: "Explorando juntos en bote por el lago"
  }
];

export function MinecraftImageGallery({ className }: MinecraftImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openImage = (index: number) => {
    setSelectedImage(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className={cn("space-y-4", className)}>
      {/* Image Grid */}
      <div className="grid grid-cols-3 gap-3">
        {minecraftImages.map((image, index) => (
          <div
            key={index}
            className={cn(
              "relative group aspect-square rounded-lg overflow-hidden bg-muted",
              "hover:shadow-medium transition-all duration-200 cursor-pointer",
              "hover:scale-105"
            )}
            onClick={() => openImage(index)}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className={cn(
              "absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100",
              "transition-opacity duration-200 flex items-center justify-center"
            )}>
              <span className="text-white text-sm font-medium bg-primary/80 px-2 py-1 rounded">
                Ver imagen
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Image Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeImage}
        >
          <div className="relative max-w-4xl max-h-[90vh] bg-card rounded-lg overflow-hidden shadow-medium">
            <button
              onClick={closeImage}
              className={cn(
                "absolute top-4 right-4 z-10 w-8 h-8 bg-background/80 hover:bg-background",
                "rounded-full flex items-center justify-center",
                "transition-colors duration-200"
              )}
            >
              <X className="w-4 h-4" />
            </button>
            <img
              src={minecraftImages[selectedImage].url}
              alt={minecraftImages[selectedImage].alt}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            <div className="p-4 bg-card">
              <p className="text-sm text-text-muted">
                {minecraftImages[selectedImage].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}