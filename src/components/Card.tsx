import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "../utils";

const cardVariants = cva(
  "border bg-gray-50 hover:bg-gray-100 border-gray-100 hover:border-gray-300 py-1.5 px-2.5 rounded-md text-neutral-800 hover:text-neutral-900 font-inter",
  {
    variants: {
      fontWeight: {
        light: "font-light",
        normal: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
      },
    },
    defaultVariants: {
      fontWeight: "semibold",
    },
  }
);

interface CardProps extends VariantProps<typeof cardVariants> {
  children: React.ReactNode;
}

function Card({ children, fontWeight }: CardProps) {
  return <p className={cn(cardVariants({ fontWeight }))}>{children}</p>;
}

export default Card;
