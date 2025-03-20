import { ButtonHTMLAttributes, JSX } from "react";
import clsx from 'clsx'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string
    variant?: 'filled' | 'outlined' | 'text'
    color?: 'primary' | 'secondary' | 'tertiary'
    icon?: React.ReactNode
    iconLeftSide?: boolean
}

export function Button({
  className,
  label, 
  icon,
  iconLeftSide = true, 
  variant = 'filled',
  color = 'primary',
  type = 'button',
  ...props}:ButtonProps):JSX.Element {
  return(
    <button
    {...props}
    type={type}
    className={clsx(
      className,
      "btn",
      {
        "btn-filled": variant === "filled",
        "btn-outlined": variant === "outlined",
        "btn-text": variant === "text",
        'gap-2': icon!=undefined,
        'pl-4 pr-6':icon!==undefined && iconLeftSide,
        'pl-6 pr-4 flex-row-reverse':icon!==undefined && !iconLeftSide,
      }
    )} >
        {icon}
        {label}
    </button>
  );
}