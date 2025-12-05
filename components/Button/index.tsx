import clsx from "clsx";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode,
  style?: "primary" | "secondary" | "disabled"
  type?: "normal" | "bordered" | "ghost"
}
type ButtonTypeProps = ButtonProps & { defaultStyle: string }

export default function Button({ ...props }: ButtonProps) {
  const borderedButton = props.type == "bordered";
  const ghostButton = props.type == "ghost";

  props.style = props.style ? props.style : "primary";

  const defaultStyle = "px-8 py-2.5 rounded-md before:rounded-md hover:cursor-pointer transition-all transition-discrete";
  const buttonTypeProps: ButtonTypeProps = {
    ...props,
    defaultStyle
  };

  if (borderedButton) return (<BorderedButton {...buttonTypeProps} />);
  if (ghostButton) return (<GhostButton {...buttonTypeProps} />);
  return (<NormalButton {...buttonTypeProps} />);
}

function NormalButton({ children, style, defaultStyle }: ButtonTypeProps) {
  const primary = style == "primary";
  const secondary = style == "secondary";
  const disabled = style == "disabled";

  return (
    <button className={
      clsx(
        defaultStyle,
        !disabled && "hover:shadow-[3px_3px_0px_#000] active:shadow-[0px_0px_0px_#000]",
        primary && "bg-primary-500 shadow-primary-1000 focus:bg-primary-250 focus:shadow-primary-750 active:bg-primary-100",
        secondary && "bg-secondary-500 shadow-secondary-1000 focus:bg-secondary-250 focus:shadow-secondary-750 active:bg-secondary-100",
        disabled && "bg-typo-86 text-typo-58"
      )
    }>
      {children}
    </button>
  );
}

function BorderedButton({ children, style, defaultStyle }: ButtonTypeProps) {
  const primary = style == "primary";
  const secondary = style == "secondary";
  const disabled = style == "disabled";

  return (
    <button className={
      clsx(
        defaultStyle,
        !disabled && "border-2",
        primary && "border-primary-500 text-primary-500 hover:border-primary-250 hover:text-primary-250 focus:bg-typo-86/20 active:bg-typo-72/10 active:border-primary-100",
        secondary && "border-secondary-500 text-secondary-500 hover:border-secondary-250 hover:text-secondary-250 focus:bg-typo-86/20 active:bg-typo-72/10 active:border-secondary-100",
        disabled && "border-2 border-typo-86 text-typo-86 hover:bg-typo-58",
      )
    }>
      {children}
    </button>
  );
}

function GhostButton({ children, style, defaultStyle }: ButtonTypeProps) {
  const primary = style == "primary";
  const secondary = style == "secondary";
  const disabled = style == "disabled";

  return (
    <button className={
      clsx(
        defaultStyle,
        !disabled && "relative before:absolute focus:before:opacity-100 before:-inset-[7px] before:content-[''] before:w-[110%] before:h-[130%] before:border-2",
        primary && "text-primary-500 hover:text-primary-250 hover:bg-primary-1000 focus:text-primary-250 focus:bg-primary-1000 before:border-primary-100 active:bg-primary-750 active:text-primary-100",
        secondary && "text-secondary-500 hover:text-secondary-250 hover:bg-secondary-1000 focus:text-secondary-250 focus:bg-secondary-1000 before:border-secondary-100 active:bg-primary-750 active:text-primary-100",
        disabled && "bg-typo-86 text-typo-58"
      )
    }>
      {children}
    </button>
  );
}