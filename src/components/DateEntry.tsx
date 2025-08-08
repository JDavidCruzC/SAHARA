import { useState } from "react";
import { EditableDate } from "./EditableDate";
import { ImageUpload } from "./ImageUpload";
import { MinecraftImageGallery } from "./MinecraftImageGallery";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface DateEntryProps {
  showMinecraftExample?: boolean;
  className?: string;
}

export function DateEntry({ showMinecraftExample = false, className }: DateEntryProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [images, setImages] = useState<File[]>([]);
  
  // Example previous date (9 de julio)
  const previousDate = new Date(2024, 6, 9); // July 9, 2024

  const handleDateChange = (newDate: Date) => {
    setCurrentDate(newDate);
    console.log("Date changed to:", newDate);
  };

  const handleImagesChange = (newImages: File[]) => {
    setImages(newImages);
    console.log("Images updated:", newImages.length, "files");
  };

  return (
    <Card className={cn(
      "p-6 space-y-6 shadow-soft border-border/50",
      "hover:shadow-medium transition-shadow duration-300",
      className
    )}>
      {/* Date Section */}
      <div className="space-y-1">
        <EditableDate
          initialDate={currentDate}
          previousDate={previousDate}
          onDateChange={handleDateChange}
        />
      </div>

      {/* Separator */}
      <div className="h-px bg-border/30"></div>

      {/* Images Section */}
      <div>
        {showMinecraftExample ? (
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-foreground">Recuerdos de Minecraft</h3>
            <MinecraftImageGallery />
          </div>
        ) : (
          <ImageUpload
            onImagesChange={handleImagesChange}
            maxImages={3}
          />
        )}
      </div>
    </Card>
  );
}