import React from 'react'
import Image from 'next/image'

const Card = () => {
  return (
    <div className="overflow-hidden h-fit shadow-lg rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold ">
            <div>
                <Image 
                alt="Artificial Intelligence"  width="450" height="300" 
                className="  object-cover w-full" style={{color:"transparent"}} src="/images/card1.jpg"/>
            </div>
            <div className="px-4 flex justify-center items-center   h-[70px]">
                <text>Artificial Intelligence</text>
            </div>
        </div>
  )
}
export default Card