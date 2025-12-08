import { ButtonProps } from "@/interfaces/ButtonProps";
import clsx from "clsx";
import { ChevronRight, Lightbulb, LucideIcon } from "lucide-react";

type LeadButtonProps = ButtonProps & { Icon?: LucideIcon }

export default function LeadButton({ children, style = "primary", disabled = false, Icon = Lightbulb, onClick, full = false }: LeadButtonProps) {

  // Boolean variables to verify the component style
  const primary = style == "primary" && !disabled;
  const secondary = style == "secondary" && !disabled;

  // Disables the on click event if it is disabled
  if (disabled == true) onClick = undefined;

  return (
    <button
      onClick={onClick}
      className={clsx(
        "flex justify-between gap-8 text-paragraph bg-linear-to-r to-65% p-3.5 rounded-tl-3xl rounded-br-3xl transition-normal transition-colors",
        !disabled && "hover:cursor-pointer",
        primary && "from-primary-250 to-primary-500 hover:from-secondary-250 hover:to-primary-250 focus:from-secondary-500 focus:to-secondary-250 active:from-secondary-500 active:to-secondary-500",
        secondary && "from-secondary-250 to-secondary-500 hover:from-primary-250 hover:to-secondary-250 focus:from-primary-500 focus:to-primary-250 active:from-primary-500 active:to-primary-500",
        disabled && "bg-typo-86 text-typo-72 hover:cursor-not-allowed",
        full && "w-full"
      )}>
      <div className="flex items-center justify-between gap-3">
        <span className="bg-white p-1.5 rounded-full rounded-bl-none shadow-[5px_2px_5px_#000] shadow-typo-30/60">
          <Icon className={
            clsx(
              primary && "text-primary-500",
              secondary && "text-secondary-500",
            )
          } size={26} />
        </span>
        {children}
      </div>
      <div className="flex items-center justify-center">
        <ChevronRight size={40} />
      </div>
    </button>
  );
}