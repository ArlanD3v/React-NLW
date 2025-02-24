import { ReactNode } from 'react';

interface IconButtonProps {}
export function IconButton(props: IconButtonProps) {
  return (
    <button
      className="p-1.5 bg-gray-500 text-primary rounded-md cursor-pointer transition-colors duration-300 hover:bg-primary hover:text-gray-900"
      {...props}
    />
  );
}
