import { type ComponentProps, ReactNode } from 'react'

interface ButtonProps extends ComponentProps<'button'> {}
export function Button(props: ButtonProps) {
  return (
    <button
      className="cursor-none flex justify-between items-center px-5 h-12 bg-gray-500 text-primary font-semibold rounded-xl w-full transition-colors duration-300 hover:bg-primary hover:text-gray-900"
      {...props}
    />
  )
}
