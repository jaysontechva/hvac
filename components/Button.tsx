import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-6 py-3 rounded-md font-bold transition-all duration-300 shadow-md flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-brand-red hover:bg-brand-darkRed text-white border border-transparent",
    secondary: "bg-brand-blue hover:bg-brand-lightBlue text-white border border-transparent",
    outline: "bg-transparent border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};