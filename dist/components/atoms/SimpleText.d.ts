import { default as React } from 'react';
import { VariantProps } from 'class-variance-authority';
declare const textVariants: (props?: ({
    variant?: "title" | "subtitle" | "body" | "caption" | "error" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface SimpleTextProps extends React.HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof textVariants> {
    children: React.ReactNode;
}
export declare const SimpleText: ({ children, variant, className, ...props }: SimpleTextProps) => import("react/jsx-runtime").JSX.Element;
export {};
