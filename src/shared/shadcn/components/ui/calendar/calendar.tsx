import { Button } from "@/shared/shadcn/components/ui/button";
import { cn } from "@/shared/shadcn/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import * as React from "react";
import { DayPicker } from "react-day-picker";
import { CalendarDropdown } from "./calendar-dropdown";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) {
  return (
    <DayPicker
      captionLayout="dropdown"
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        dropdowns: "flex items-center justify-between gap-1 pr-24",
        month_caption: "flex justify-center relative items-center",
        month_grid: "w-full border-separate border-spacing-y-2",
        months: "flex flex-col sm:space-y-0 relative",
        month: "space-y-4",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center absolute right-0 z-[1]",
        weekday: "text-muted-foreground w-9 font-normal text-xs",
        week: "mt-2",
        day: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent focus-within:relative focus-within:z-20",
        day_button: "h-9 w-9 p-0 font-normal aria-selected:opacity-100",
        range_end: "day-range-end",
        selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        today: "border",
        outside: "day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground",
        disabled: "text-muted-foreground opacity-50",
        range_middle: "aria-selected:bg-secondary aria-selected:text-accent-foreground",
        hidden: "invisible",
        ...classNames,
      }}
      components={{
        Dropdown: CalendarDropdown,
        Chevron: ({ ...props }) =>
          props.orientation === "left" ? (
            <Button size="icon-sm" variant="secondary">
              <ChevronLeft className="h-4 w-4" />
            </Button>
          ) : (
            <Button size="icon-sm" variant="secondary">
              <ChevronRight className="h-4 w-4" />
            </Button>
          ),
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
