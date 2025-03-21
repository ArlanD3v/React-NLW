import { cn } from '@/lib/util'
import type { ComponentProps } from 'react'

interface InputRootProps extends ComponentProps<'div'> {
  error?: boolean
}
export function InputRoot({
  error = false,
  className,
  ...props
}: InputRootProps) {
  return (
    <div
      data-error={error}
      className={cn(
        'group bg-gray-800 h-12 border rounded-xl px-4 flex items-center gap-2 focus-within:border-gray-100',
        error ? 'border-danger' : 'border-gray-600',
        className
      )}
      {...props}
    />
  )
}

interface InputIconProps extends ComponentProps<'span'> {}

export function InputIcon({ className, ...props }: InputIconProps) {
  return (
    <span
      className={cn(
        'text-gray-400 group-focus-within:text-gray-100',
        'group-[&:not(:has(input:placeholder-shown))]:text-gray-100',
        'group-data-[error=true]:text-danger',
        className
      )}
      {...props}
    />
  )
}

interface InputFieldProps extends ComponentProps<'input'> {}

export function InputField({ className, ...props }: InputFieldProps) {
  return (
    <input
      className={cn('flex-1 outline-0 placeholder-gray-400', className)}
      {...props}
    />
  )
}
