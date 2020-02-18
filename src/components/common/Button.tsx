import React from 'react';

type ButtonProps = {
  className: string;
  onClick: () => void;
  buttonText: string;
}

export const Button = ({ className, onClick, buttonText }: ButtonProps) => {
  return (
    <button type="button" className={className} onClick={onClick}>
      {buttonText}
    </button>
  );
}

export default Button;
