import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "whatsapp";
  className?: string;
  onClick?: () => void;
   disabled?: boolean; // <-- add this
  type?: "button" | "submit" | "reset"; 
}

export default function Button({ children, href, variant = "primary", className = "", onClick }: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-leaf-green text-white hover:bg-light-green focus:ring-leaf-green",
    secondary: "bg-soft-orange text-white hover:bg-orange-600 focus:ring-soft-orange",
    outline: "border-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white focus:ring-primary-blue",
    whatsapp: "bg-green-500 text-white hover:bg-green-600 focus:ring-green-500",
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
}