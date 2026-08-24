"use client"

import * as React from "react"
import { type VariantProps } from "class-variance-authority"
import { ToggleGroup as ToggleGroupPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"
import { toggleVariants } from "@/components/ui/toggle"

const ToggleGroupContext = React.createContext<
  VariantProps<typeof toggleVariants> & {
    spacing?: number
    orientation?: "horizontal" | "vertical"
  }
>({
  size: "default",
  variant: "default",
  spacing: 2,
  orientation: "horizontal",
})

function ToggleGroup({
  className,
  variant,
  size,
  spacing = 2,
  orientation = "horizontal",
  children,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Root> &
  VariantProps<typeof toggleVariants> & {
    spacing?: number
    orientation?: "horizontal" | "vertical"
  }) {
  return (
    <ToggleGroupPrimitive.Root
      data-slot="toggle-group"
      data-variant={variant}
      data-size={size}
      data-spacing={spacing}
      data-orientation={orientation}
      style={{ "--gap": spacing } as React.CSSProperties}
      className={cn(
        "group/toggle-group flex w-fit flex-row items-center gap-[--spacing(var(--gap))] data-[spacing=0]:data-[variant=outline]:h-9 data-[spacing=0]:data-[variant=outline]:items-stretch data-[spacing=0]:data-[variant=outline]:rounded-lg data-[spacing=0]:data-[variant=outline]:bg-muted data-[spacing=0]:data-[variant=outline]:p-0.5 data-vertical:flex-col data-vertical:items-stretch",
        className
      )}
      {...props}
    >
      <ToggleGroupContext.Provider
        value={{ variant, size, spacing, orientation }}
      >
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
  )
}

function ToggleGroupItem({
  className,
  children,
  variant = "default",
  size = "default",
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Item> &
  VariantProps<typeof toggleVariants>) {
  const context = React.useContext(ToggleGroupContext)

  return (
    <ToggleGroupPrimitive.Item
      data-slot="toggle-group-item"
      data-variant={context.variant || variant}
      data-size={context.size || size}
      data-spacing={context.spacing}
      className={cn(
        "shrink-0 focus:z-10 focus-visible:z-10 group-data-[spacing=0]/toggle-group:min-h-0 group-data-[spacing=0]/toggle-group:px-3 group-data-[spacing=0]/toggle-group:has-data-[icon=inline-end]:pe-2.5 group-data-[spacing=0]/toggle-group:has-data-[icon=inline-start]:ps-2.5 group-data-[spacing=0]/toggle-group:data-[variant=outline]:rounded-[calc(var(--radius-lg)-2px)] group-data-[spacing=0]/toggle-group:data-[variant=outline]:border-transparent group-data-[spacing=0]/toggle-group:data-[variant=outline]:shadow-none group-data-[spacing=0]/toggle-group:data-[variant=outline]:text-foreground/60 group-data-[spacing=0]/toggle-group:data-[variant=outline]:hover:text-foreground group-data-[spacing=0]/toggle-group:data-[variant=outline]:data-[state=on]:bg-background group-data-[spacing=0]/toggle-group:data-[variant=outline]:data-[state=on]:text-foreground group-data-[spacing=0]/toggle-group:data-[variant=outline]:data-[state=on]:shadow-(--shadow-button-soft) data-[state=on]:bg-muted",
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        "group-data-[spacing=0]/toggle-group:h-full",
        className
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  )
}

export { ToggleGroup, ToggleGroupItem }
