import React from "react"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "link"
}

export function Button({ variant = "default", className, ...props }: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-md transition-colors"

  const variants = {
    default: "bg-black text-white px-4 py-2 hover:bg-zinc-800",
    link: "text-black underline hover:text-zinc-700 px-0 py-0"
  }

  const _class = `${base} ${variants[variant]} ${className}`

  return (
    <button
      className={_class}
      {...props}
    />
  )
}
