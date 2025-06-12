"use client";

import { cn } from "@/shared/shadcn/lib/utils";
import { clamp } from "@radix-ui/number";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { gte, lte } from "lodash";
import { both } from "ramda";
import * as React from "react";

type MarkerPosition = { position: number; label?: string };

interface SliderProps extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  markerPositions?: MarkerPosition[];
}

const Slider = React.forwardRef<React.ElementRef<typeof SliderPrimitive.Root>, SliderProps>((_props, ref) => {
  const { className, markerPositions, value, defaultValue, ...props } = _props;
  const [localValue, setLocalValue] = React.useState(value ?? defaultValue ?? [0]);

  const markerSize = 12;
  const min = props.min || 0;
  const max = props.max || 100;
  const _value = value ?? localValue;

  return (
    <div className="relative w-full">
      <SliderPrimitive.Root
        ref={ref}
        className={cn("relative flex w-full touch-none select-none items-center [&>span:last-child]:z-[1]", className)}
        {...props}
        value={_value}
        onValueChange={(values) => {
          setLocalValue(values);
          props.onValueChange?.(values);
        }}
      >
        <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-muted">
          <SliderPrimitive.Range className="absolute h-full bg-primary" />
        </SliderPrimitive.Track>

        <SliderPrimitive.Thumb className="block h-3 w-3 rounded-full border-2 border-primary bg-muted transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50" />
      </SliderPrimitive.Root>

      {/* Step markers */}
      <div className="pointer-events-none absolute top-1/2 w-full -translate-y-1/2">
        {markerPositions?.map(({ label, position }, index) => {
          const isActive = isMarkerActive(position, _value);

          const percent = convertValueToPercentage(position, min, max);
          const thumbInBoundsOffset = getThumbInBoundsOffset(markerSize, percent, 1);
          const offset = `calc(${percent}% + ${thumbInBoundsOffset}px)`;

          return (
            <div
              key={index}
              className="absolute flex flex-col items-center"
              style={{ left: offset, top: "-6px", transform: "translateX(-50%)" }}
            >
              <div
                style={{ width: `${markerSize}px`, height: `${markerSize}px` }}
                className={cn(
                  "mb-1 rounded-full border-2 bg-muted-20 backdrop-blur-3xl",
                  isActive ? "border-primary" : "border-muted",
                )}
              />

              {label && (
                <span className={cn("mt-1.5 text-xs text-muted-foreground", isActive && "text-foreground")}>
                  {label}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
});
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
export type { SliderProps };

function isMarkerActive(value: number, sliderValue: number[]): boolean {
  if (sliderValue.length === 1) {
    return value <= sliderValue[0];
  }

  if (sliderValue.length === 2) {
    return both(
      (x: number) => gte(x, sliderValue[0]),
      (x: number) => lte(x, sliderValue[1]),
    )(value);
  }

  return false;
}

/**
 * Helper functions from RadixUI
 */
function convertValueToPercentage(value: number, min: number, max: number) {
  const maxSteps = max - min;
  const percentPerStep = 100 / maxSteps;
  const percentage = percentPerStep * (value - min);
  return clamp(percentage, [0, 100]);
}

function getThumbInBoundsOffset(width: number, left: number, direction: number) {
  const halfWidth = width / 2;
  const halfPercent = 50;
  const offset = linearScale([0, halfPercent], [0, halfWidth]);
  return (halfWidth - offset(left) * direction) * direction;
}

function linearScale(input: readonly [number, number], output: readonly [number, number]) {
  return (value: number) => {
    if (input[0] === input[1] || output[0] === output[1]) return output[0];
    const ratio = (output[1] - output[0]) / (input[1] - input[0]);
    return output[0] + ratio * (value - input[0]);
  };
}
