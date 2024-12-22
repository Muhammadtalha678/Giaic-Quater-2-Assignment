import React from 'react'
import Button from './Button'

const HeroSection = () => {
  return (
    <div className='w-[1920px] h-[829px] bg-[#043873] grid grid-cols-2 px-[220px] items-center justify-center pt-[140px] pb-[140px]'>
      <div className="flex flex-col gap-14 w-full h-[361px] justify-center  ">
        <div className="flex flex-col gap-6 ">
            <h1 className='font-bold text-6xl text-white'>
                Get More Done with whitepace
            </h1>
            <p className='text-lg font-normal text-white'>
                Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks
            </p>
        </div>
        <div className="flex">
            <Button buttonColor='bg-[#4F9CF9] text-white' buttonHeight='h-[63px] w-[219px]'>Try Whitepace free</Button>
        </div>
      </div>
      <div className="flex bg-[#C4DEFD] w-full h-[549px]"></div>
    </div>
  )
}

export default HeroSection
