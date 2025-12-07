import { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode,
  style?: "primary" | "secondary",
  disabled?: boolean,
  onClick?: () => void,
  full?: boolean
}