import { useState } from "react";
import { format, parse } from "date-fns";
import { es } from "date-fns/locale";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Calendar as CalendarIcon } from "lucide-react";

interface EditableDateProps {
  initialDate?: Date;
  previousDate?: Date;
  onDateChange?: (date: Date) => void;
  className?: string;
}

export function EditableDate({ 
  initialDate = new Date(), 
  previousDate,
  onDateChange,
  className 
}: EditableDateProps) {
  const [currentDate, setCurrentDate] = useState<Date>(initialDate);
  const [isOpen, setIsOpen] = useState(false);

  const formatDateSpanish = (date: Date) => {
    return format(date, "d 'de' MMMM", { locale: es });
  };

  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      setCurrentDate(date);
      onDateChange?.(date);
      setIsOpen(false);
    }
  };

  return (
    <div className={cn("space-y-2", className)}>
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <button
            className={cn(
              "flex items-center gap-2 text-lg font-medium text-foreground",
              "hover:bg-hover-bg rounded-lg px-3 py-2 -mx-3 -my-2",
              "transition-colors duration-200",
              "focus:outline-none focus:ring-2 focus:ring-primary/20",
              "group cursor-pointer"
            )}
          >
            <CalendarIcon className="w-5 h-5 text-primary" />
            <span>{formatDateSpanish(currentDate)}</span>
            <span className="text-text-subtle opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              ✏️
            </span>
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 shadow-medium" align="start">
          <Calendar
            mode="single"
            selected={currentDate}
            onSelect={handleDateSelect}
            initialFocus
            className="p-3 pointer-events-auto"
            locale={es}
          />
        </PopoverContent>
      </Popover>
      
      {previousDate && (
        <div className="flex items-center gap-2 text-sm text-text-muted">
          <span className="inline-block w-1 h-1 bg-text-muted rounded-full"></span>
          <span>Fecha anterior: <span className="font-medium">{formatDateSpanish(previousDate)}</span></span>
        </div>
      )}
    </div>
  );
}