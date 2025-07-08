import { ReactNode } from "react";

type GradientType = "derecha" | "arriba" | "diagonal";
type RadiusType = "sm" | "md" | "lg" | "full";

type ButtonProps = {
  text?: string;
  icon?: ReactNode;
  gradient?: GradientType;
  rounded?: RadiusType;
  onClick?: () => void;
  className?: string;
};

export default function Button({
  text,
  icon,
  gradient = "derecha",
  rounded = "full",
  onClick,
  className = "",
}: ButtonProps) {
  const gradientClass = gradientStyles[gradient];
  const roundedClass = roundedStyles[rounded];

  return (
    <button
      onClick={onClick}
      className={`w-fit text-[12px] md:text-sm cursor-pointer text-white font-semibold px-6 py-3 duration-500  hover:opacity-80 flex items-center gap-2 ${gradientClass} ${roundedClass} ${className}`}
    >
      {icon}
      {text}
    </button>
  );
}

const gradientStyles: Record<GradientType, string> = {
  derecha: "bg-gradient-azul-derecha",
  arriba: "bg-gradient-azul-arriba",
  diagonal: "bg-gradient-azul-diagonal",
};

const roundedStyles: Record<RadiusType, string> = {
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
};
