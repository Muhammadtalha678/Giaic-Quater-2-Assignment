import React from 'react'

interface ButtonProps {
    children: React.ReactNode,
    buttonColor: string,
    buttonWidth?: string
    buttonHeight?: string
}
const Button = (props:ButtonProps) => {
  return (
      <button className={`${props.buttonWidth || 'w-[126px]'} ${props.buttonHeight || 'h-[60px]'}
     ${props.buttonColor} rounded-lg text-lg leading-[23px] font-medium`}>
      {props.children}
    </button>
  )
}

export default Button
