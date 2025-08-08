import { useState, useRef } from "react";
import { Plus, X, Image } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImageUploadProps {
  onImagesChange?: (files: File[]) => void;
  maxImages?: number;
  className?: string;
}

export function ImageUpload({ 
  onImagesChange, 
  maxImages = 3, 
  className 
}: ImageUploadProps) {
  const [images, setImages] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (files: FileList | null) => {
    if (!files) return;

    const newFiles = Array.from(files).slice(0, maxImages - images.length);
    const newPreviews: string[] = [];

    newFiles.forEach(file => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          newPreviews.push(e.target?.result as string);
          if (newPreviews.length === newFiles.length) {
            setImages(prev => [...prev, ...newFiles]);
            setPreviews(prev => [...prev, ...newPreviews]);
            onImagesChange?.([...images, ...newFiles]);
          }
        };
        reader.readAsDataURL(file);
      }
    });
  };

  const removeImage = (index: number) => {
    const newImages = images.filter((_, i) => i !== index);
    const newPreviews = previews.filter((_, i) => i !== index);
    
    setImages(newImages);
    setPreviews(newPreviews);
    onImagesChange?.(newImages);
  };

  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={cn("space-y-4", className)}>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        multiple
        onChange={(e) => handleFileSelect(e.target.files)}
        className="hidden"
      />

      {/* Image Previews */}
      {previews.length > 0 && (
        <div className="flex flex-wrap gap-3">
          {previews.map((preview, index) => (
            <div
              key={index}
              className="relative group w-20 h-20 rounded-lg overflow-hidden bg-muted"
            >
              <img
                src={preview}
                alt={`Preview ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => removeImage(index)}
                className={cn(
                  "absolute -top-1 -right-1 w-6 h-6 bg-destructive text-destructive-foreground",
                  "rounded-full flex items-center justify-center",
                  "opacity-0 group-hover:opacity-100 transition-opacity duration-200",
                  "hover:bg-destructive/90 focus:outline-none focus:ring-2 focus:ring-destructive/20"
                )}
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Upload Button */}
      {images.length < maxImages && (
        <button
          onClick={triggerFileSelect}
          className={cn(
            "w-full flex items-center justify-center gap-3 p-6",
            "border-2 border-dashed border-border rounded-lg",
            "hover:border-primary hover:bg-hover-bg",
            "transition-colors duration-200",
            "focus:outline-none focus:ring-2 focus:ring-primary/20",
            "group cursor-pointer"
          )}
        >
          <div className="flex items-center gap-3 text-text-muted group-hover:text-primary transition-colors">
            <div className="p-2 bg-muted group-hover:bg-primary/10 rounded-full transition-colors">
              <Plus className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="font-medium">Agregar foto</div>
              <div className="text-sm text-text-subtle">
                Arrastra aquí tus imágenes o haz clic para seleccionar
              </div>
            </div>
          </div>
        </button>
      )}

      {/* Max images reached */}
      {images.length >= maxImages && (
        <div className="text-center p-4 bg-muted rounded-lg">
          <Image className="w-8 h-8 text-text-muted mx-auto mb-2" />
          <p className="text-sm text-text-muted">
            Has alcanzado el límite de {maxImages} imágenes
          </p>
        </div>
      )}
    </div>
  );
}