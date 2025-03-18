import { 
  ChangeEvent, 
  InputHTMLAttributes, 
  JSX, 
  Ref, 
  useEffect, 
  useState } from "react";

  import { clsx } from "clsx";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  ref?: Ref<HTMLInputElement>
  variant?: 'filled' |'outlined'
  leadingIcon?: React.ReactNode
  trailingIcon?: React.ReactNode
  hiddenLabel?: boolean
  supportingText?: string,
}


export function TextField({
  ref,
  variant = 'filled',
  className,
  placeholder,
  hiddenLabel = false,
  supportingText = '',
  ...props
}: TextFieldProps): JSX.Element {
  const [localValue, setLocalValue] = useState<string>(props.value ? String(props.value) : "")

  const handleOnChange = (event:ChangeEvent<HTMLInputElement>) => {
    if (props.onChange !== undefined) {
      props.onChange(event)
    }else{
      setLocalValue(event.target.value)
    }
  }
  

  useEffect(()=>{
    setLocalValue(props.value?String(props.value):"")
  },[props.value])

  return (
    <div className="relative w-full">
      {/* Contenedor con borde completo */}
      <div className={clsx(
        className,
        `text-field`,
        variant === 'outlined'
          ? `text-field-outlined`
          : 'text-field-filled'
      )}>
        {/* Input */}
        <input
          {...props}
          ref={ref}
          type="text"
          id={props.id || `inputText-${placeholder}`}
          className="peer w-full bg-transparent text-gray-900 outline-none focus:ring-0 "
          placeholder=" "
          value={localValue}
          onChange={handleOnChange}
        />

        {/* Etiqueta flotante */}
        {!hiddenLabel && <label
          htmlFor={props.id||`inputText-${placeholder}`}
          className={clsx(
            "absolute left-3 text-gray-500 transition-all px-1",
            variant === 'outlined' ? 'bg-white':'bg-transparent',
            variant === 'outlined' && (
              localValue 
              ? `label-text-field-outlined-focused` 
              : `label-text-field-outlined-unfocused`),
            variant === 'filled' && (
              localValue
              ? `label-text-field-filled-focused`
              : `label-text-field-filled-unfocused`
            )
          )}
        >
          {placeholder}
        </label>}
      </div>

      {/* Texto de ayuda */}
      {(supportingText.length > 0) && <p className="text-field-support-text">{supportingText}</p>}
    </div>
  );
}