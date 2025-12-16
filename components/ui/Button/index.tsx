import { ButtonProps } from "@/interfaces/ButtonProps";
import clsx from "clsx";

// Props for a variant of a button component, to pass a default style for the variants
type ButtonVariantProps = ButtonProps & { defaultStyle: string }
// Component's variants
type ButtonVariants = "normal" | "bordered" | "ghost";

// Main button component
export default function Button({ full = false, ...props }: ButtonProps & { variant?: ButtonVariants }) {
  // If the component doesn't have a style prop, defines as primary style
  props.style = props.style ? props.style : "primary";

  // Disables the onClick event if the component is disabled
  if (props.disabled == true) props.onClick = undefined;

  // Disables the style if the component is disabled
  if (props.disabled == true) props.style = undefined;

  // Default styles for the button
  let defaultStyle = "px-8 py-2.5 rounded-md";

  // Adds a width full style if the full prop is true
  if (full == true) defaultStyle += " w-full";

  // Makes a `ButtonVariantProps` type object, to pass the default styles for the button variant components
  const buttonVariantProps: ButtonVariantProps = {
    ...props,
    defaultStyle
  };

  // Verifies if the component has the bordered variant, and store the boolean value
  const borderedButton = props.variant == "bordered";
  // Verifies if the component has the ghost variant, and store the boolean value
  const ghostButton = props.variant == "ghost";

  // Return the equivalent button variant by the variant prop, normal variant as default
  if (borderedButton) return (<BorderedButton {...buttonVariantProps} />);
  if (ghostButton) return (<GhostButton {...buttonVariantProps} />);
  return (<NormalButton {...buttonVariantProps} />);
}

// Normal variant button component
function NormalButton({ children, style, defaultStyle, disabled = false, onClick }: ButtonVariantProps) {
  // Verifies if the component has the primary style, and store the boolean value
  const primary = style == "primary";
  // Verifies if the component has the secondary style, and store the boolean value
  const secondary = style == "secondary";

  // Returns the button, styled by Tailwind classes
  // Uses the clsx to do a conditional style, and define a default style
  return (
    <button onClick={onClick} className={
      clsx(
        defaultStyle,
        !disabled && "hover:shadow-[3px_3px_0px_#000] active:shadow-[0px_0px_0px_#000] hover:cursor-pointer",
        primary && "bg-primary-500 shadow-primary-1000 focus:bg-primary-100 focus:shadow-primary-750 active:bg-primary-100",
        secondary && "bg-secondary-500 shadow-secondary-1000 focus:bg-secondary-100 focus:shadow-secondary-750 active:bg-secondary-100",
        disabled && "bg-typo-86 text-typo-58 hover:cursor-not-allowed"
      )
    }>
      {children}
    </button>
  );
}

// Bordered variant button component
function BorderedButton({ children, style, defaultStyle, disabled = false, onClick }: ButtonVariantProps) {
  const primary = style == "primary";
  const secondary = style == "secondary";

  return (
    <button onClick={onClick} className={
      clsx(
        defaultStyle,
        !disabled && "border-2 hover:cursor-pointer",
        primary && "border-primary-500 text-primary-500 hover:border-primary-250 hover:text-primary-250 focus:bg-typo-86/20 active:bg-typo-72/10 active:border-primary-100",
        secondary && "border-secondary-500 text-secondary-500 hover:border-secondary-250 hover:text-secondary-250 focus:bg-typo-86/20 active:bg-typo-72/10 active:border-secondary-100",
        disabled && "border-2 border-typo-86 text-typo-86 hover:bg-typo-58 hover:cursor-not-allowed",
      )
    }>
      {children}
    </button>
  );
}

// Ghost button variant component
function GhostButton({ children, style, defaultStyle, disabled = false, onClick }: ButtonVariantProps) {
  const primary = style == "primary";
  const secondary = style == "secondary";

  return (
    <button onClick={onClick} className={
      clsx(
        defaultStyle,
        !disabled && "relative before:absolute before:opacity-0 focus:before:opacity-100 before:-inset-[7px] before:content-[''] before:border-2 before:rounded-lg hover:cursor-pointer",
        primary && "text-primary-500 hover:text-primary-250 hover:bg-primary-1000 focus:text-primary-250 focus:bg-primary-1000 before:border-primary-100 active:bg-primary-750 active:text-primary-100",
        secondary && "text-secondary-500 hover:text-secondary-250 hover:bg-secondary-1000 focus:text-secondary-250 focus:bg-secondary-1000 before:border-secondary-100 active:bg-primary-750 active:text-primary-100",
        disabled && "bg-typo-86 text-typo-58 hover:cursor-not-allowed"
      )
    }>
      {children}
    </button>
  );
}