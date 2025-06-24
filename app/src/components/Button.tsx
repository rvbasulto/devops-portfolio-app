import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  type?: "button" | "submit" | "reset";
  size?: "small" | "normal";
  design?: "primary" | "secondary";
  link?: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function Button({
  type = "button",
  size = "normal",
  design = "primary",
  link,
  children,
  className = "",
  onClick,
}: ButtonProps) {
  const baseTextSize = size === "normal" ? "button-1" : "button-1";

  const baseClasses = `
    inline-flex items-center justify-center gap-2 text-center shrink-0 transition-transform duration-200 ease-in-out
    hover:scale-105
    ${size === "normal" ? "px-[40px] py-[22px] rounded-[12px]" : "px-4 py-4 rounded-[12px] w-fit"}
    ${baseTextSize}
    ${className}
  `;

  const designClasses =
    design === "primary"
      ? "bg-green-gradient text-white hover:brightness-110"
      : "shadow-[inset_0_0_0_1px_#C9F7C3]  text-[#C9F7C3] bg-transparent hover:bg-[#c9f7c326]";

  const buttonClasses = `${baseClasses} ${designClasses}`;

  if (link) {
    return (
      <Link href={link} className={buttonClasses} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
}