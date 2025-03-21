import Image from "next/image";
import { ButtonHTMLAttributes, ImgHTMLAttributes, JSX } from "react";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode | string
  alt?: string
  width?: number | `${number}`
  height?: number | `${number}`
}

export function IconButton({
  icon, 
  alt="", 
  width="24", 
  height="24", 
  ...props}:IconButtonProps): JSX.Element {
    return(
      <button {...props} className="flex items-center justify-center w-10 p-2 border border-gray-400 rounded-xl">
        {typeof icon === "string" 
        ? <Image
          src={icon}
          alt={alt}
          width={width}
          height={height}/> : icon}
      </button>
    )
}