import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const textVariants = cva("leading-normal", {
  variants: {
    variant: {
      title: "text-2xl font-bold",
      subtitle: "text-xl font-semibold",
      body: "text-base",
      caption: "text-sm text-muted-foreground",
      error: "text-sm text-mtx-alert-danger-0",
    },
  },
  defaultVariants: {
    variant: "body",
  },
});

export interface SimpleTextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  children: React.ReactNode;
}

export const SimpleText = ({
  children,
  variant,
  className,
  ...props
}: SimpleTextProps) => {
  return (
    <p className={cn(textVariants({ variant }), className)} {...props}>
      {children}
    </p>
  );
};
