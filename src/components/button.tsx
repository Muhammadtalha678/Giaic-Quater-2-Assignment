import React from "react"

interface Props  {
    onClick : () => void,
    children : React.ReactNode
}

const Button = ({children,onClick}:Props) => {
    return (
        <button onClick={onClick}
         className="text-2xl bg-purple-500 px-5 py-2 rounded-lg  text-white">
            {children}
        </button>
    )
}
export default Button