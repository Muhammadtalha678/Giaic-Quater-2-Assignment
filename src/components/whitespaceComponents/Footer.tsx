import React from 'react'
import Image from 'next/image'
import Logo from '../../../public/images/Logo.png'
const Footer = () => {
  return (
    <footer className='mt-5 w-[1920px] h-[461px] bg-[#043873]  flex flex-col'>
        <div className='pt-140px pb-[32px] px-[220px] grid grid-cols-4 pt-[140px]'>
            <div className="flex flex-col gap-2 py-6 px-12">
                <Image src={Logo} alt='Navbar Logo' />
                <p  className='text-white text-lg font-normal'>
                    whitepace was created for the new ways we live and work. 
                    We make a better workspace around the world
                </p>

            </div>
            <div className=" flex flex-col gap-4 py-6 px-12">
                  <h1 className='text-lg text-white font-bold'>Product</h1>
                  <ul className='flex flex-col gap-4 text-white '>
                      <li>Overview</li>
                      <li>Pricing</li>
                      <li>Customer stories</li>
                  </ul>
            </div>
           <div className=" flex flex-col gap-4 py-6 px-12">
                  <h1 className='text-lg text-white font-bold'>Resources</h1>
                  <ul className='flex flex-col gap-4 text-white '>
                      <li>Blog</li>
                      <li>Guides & tutorials</li>
                      <li>Help center</li>
                  </ul>
            </div>
            <div className=" flex flex-col gap-4 py-6 px-12">
                  <h1 className='text-lg text-white font-bold'>Link</h1>
                  <ul className='flex flex-col gap-4 text-white '>
                      <li>About us</li>
                      <li>Careers</li>
                      <li>Media kit</li>
                  </ul>
            </div>
        </div>
        <div className='flex items-center justify-center border-t-2 px-[220px] h-full'>
            <p className='text-white '>©2021 Whitepace LLC.</p>
        </div>
    </footer>
  )
}

export default Footer
