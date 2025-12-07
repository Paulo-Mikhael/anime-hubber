import clsx from "clsx";
import { ChevronRight, Lightbulb, LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, ReactNode, RefAttributes } from "react";

type LucideIcon = ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;

interface Props {
  children: ReactNode,
  style?: "primary" | "secondary",
  disabled?: boolean,
  Icon?: LucideIcon,
  onClick?: () => void
}

export default function LeadButton({ children, style = "primary", disabled = false, Icon = Lightbulb, onClick }: Props) {
  const primary = style == "primary";
  const secondary = style == "secondary";

  return (
    <button onClick={onClick} className={clsx(
      "hover:cursor-pointer flex justify-between gap-8 text-paragraph bg-linear-to-r to-65% p-3.5 rounded-tl-3xl rounded-br-3xl min-w-[250px] transition-normal transition-colors",
      primary && "from-primary-250 to-primary-500 hover:from-secondary-250 hover:to-primary-250 focus:from-secondary-500 focus:to-secondary-250 active:from-secondary-500 active:to-secondary-500",
      secondary && "from-secondary-250 to-secondary-500 hover:from-primary-250 hover:to-secondary-250 focus:from-primary-500 focus:to-primary-250 active:from-primary-500 active:to-primary-500",
      disabled && "bg-typo-86 text-typo-72 hover:cursor-not-allowed"
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
        <ChevronRight size={30} />
      </div>
    </button>
  );
}