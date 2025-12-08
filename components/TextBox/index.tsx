"use client";

import { theme } from "@/data/variables";
import clsx from "clsx";
import { Search, SlidersHorizontal } from "lucide-react";
import { useRef } from "react";

interface Props {
  style?: "primary" | "secondary"
  placeholder?: string
  disabled?: boolean,
  state?: "success" | "danger"
  labelText?: string,
  filterButton?: boolean,
  filterButtonOnClick?: () => void,
  full?: boolean
}

export default function TextBox({ placeholder = "Escreva algo aqui...", style, disabled = false, labelText, filterButton = false, filterButtonOnClick, state, full = true }: Props) {
  // Elements ref to change it's style manually
  const labelRef = useRef<HTMLLabelElement>(null);
  const boxBorderRef = useRef<HTMLSpanElement>(null);
  const boxBackgroundRef = useRef<HTMLDivElement>(null);

  // Changes the component style when it is activated
  function activeTextboxStyles() {
    // Styles for primary style
    if (primary) {
      // Changes the label style only if it has a label element
      labelText && (labelRef.current!.style.color = theme.colors.secondary_500);
      boxBorderRef.current!.style.borderColor = theme.colors.secondary_500;
      boxBackgroundRef.current!.style.background = `linear-gradient(to right, ${theme.colors.secondary_1000}, ${theme.colors.secondary_750})`;
    }
    // Styles for secondary style
    else if (secondary) {
      // Changes the label style only if it has a label element
      labelText && (labelRef.current!.style.color = theme.colors.primary_500);
      boxBorderRef.current!.style.borderColor = theme.colors.primary_500;
      boxBackgroundRef.current!.style.background = `linear-gradient(to right, ${theme.colors.primary_1000}, ${theme.colors.primary_750})`;
    }
  }
  // Resets the component style to the initial styles
  function initialTextboxStyles() {
    // Returns if the component is disabled
    if (disabled == true) return;

    // Changes the label style only if it has a label element
    labelText && (labelRef.current!.style.color = "");
    boxBorderRef.current!.style.borderColor = "";
    boxBackgroundRef.current!.style.background = "";
  }

  // If the component has a state either success or danger, the component wont receive a style
  switch (state) {
    case "success":
      style = undefined;
      break;
    case "danger":
      style = undefined;
      break;
    default:
      // otherwise, if it doesn't has a success or danger state, the component style will be that received by params, or primary as default
      style = style ? style : "primary";
      break;
  }
  // Disables the component's style and state if it is disabled
  if (disabled) style = undefined;
  if (disabled) state = undefined;

  // Disables the filter button click event if it doesn't has a filter button
  if (!filterButton) filterButtonOnClick = undefined;

  // Boolean variables to verify the component's styles
  const primary = style == "primary";
  const secondary = style == "secondary";
  // Boolean variables to verify the component's state
  const success = state == "success";
  const danger = state == "danger";

  return (
    <div
      className={
        clsx(
          "flex flex-col gap-1 group",
          disabled && "cursor-not-allowed",
        )
      }
    >
      {labelText && (
        <label
          ref={labelRef}
          htmlFor="textbox"
          className={
            clsx(
              primary && "text-primary-1000 group-hover:text-primary-500 focus:text-secondary-500",
              secondary && "text-secondary-1000 group-hover:text-secondary-500 focus:text-primary-500",
              disabled && "text-typo-72 cursor-not-allowed",
              success && "text-success",
              danger && "text-danger"
            )
          }
        >
          {labelText}
        </label>
      )}
      <span
        ref={boxBorderRef}
        className={
          clsx(
            "flex justify-center items-center gap-2.5 px-3.5 rounded-[3px] border-4 relative transition-colors transition-normal",
            primary && "border-primary-750 group-hover:border-primary-250",
            secondary && "border-secondary-750 group-hover:border-secondary-250",
            disabled && "border-typo-72",
            success && "border-success",
            danger && "border-danger",
            full && "w-full"
          )
        }>
        <div
          ref={boxBackgroundRef}
          className={
            clsx(
              "absolute top-0 left-0 w-full h-full z-0 opacity-50",
              primary && "bg-linear-to-r from-primary-1000 to-primary-750",
              secondary && "bg-linear-to-r from-secondary-1000 to-secondary-750",
              disabled && "bg-typo-86",
              success && "bg-success",
              danger && "bg-danger"
            )
          }
        />
        <div className="flex gap-2.5 justify-center items-center z-10">
          <Search
            className={
              clsx(
                primary && "text-primary-500 group-hover:text-primary-750",
                secondary && "text-secondary-500 group-hover:text-secondary-750",
                disabled && "text-typo-72"
              )
            }
          />
          <input
            disabled={disabled}
            onFocus={activeTextboxStyles}
            onBlur={initialTextboxStyles}
            id="textbox"
            className={
              clsx(
                "py-3 outline-0",
                !disabled && "placeholder:text-typo-72",
                disabled && "cursor-not-allowed placeholder:text-typo-72"
              )
            }
            placeholder={placeholder}
          />
        </div>
        {
          filterButton && state == undefined && (
            <button
              onClick={filterButtonOnClick}
              className={
                clsx(
                  "p-1.5 z-10 rounded-[3px] transition-colors transition-normal",
                  primary && "bg-primary-750 hover:bg-primary-500 focus:bg-primary-500 active:bg-secondary-500",
                  secondary && "bg-secondary-750 hover:bg-secondary-500 focus:bg-secondary-500 active:bg-primary-500",
                  !disabled && "cursor-pointer",
                  disabled && "cursor-not-allowed bg-typo-72",
                  success && "bg-success",
                  danger && "bg-danger"
                )
              }
            >
              <SlidersHorizontal
                className={
                  clsx(
                    primary && "text-primary-250 hover:text-primary-100 focus:text-primary-100 active:text-secondary-100",
                    secondary && "text-secondary-250 hover:text-secondary-100 focus:text-secondary-100 active:text-primary-100",
                    disabled && "text-typo-58"
                  )
                }
                size={18}
              />
            </button>
          )
        }
      </span>
    </div>
  );
}