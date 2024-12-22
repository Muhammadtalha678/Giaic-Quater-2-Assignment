import Image from 'next/image'
import React from 'react'
import Logo from '../../../public/images/Logo.png'
import Button from './Button'
import { navLink } from '@/utils/navlink'
import Link from 'next/link'
// import from ''
const Navbar = () => {
  return (
    <div className='flex justify-between items-center w-[1920px] h-[92px] bg-[#043873] px-[220px]'>
      <div className="flex h-[34px]">
        <Link href={'/'}><Image src={Logo} alt='Navbar Logo' /></Link>
      </div>
      <div className="flex justify-between w-[737px]">
        <div className="flex">
            <ul className='flex text-white gap-8 items-center'>
                      {navLink.map((e, i) => {
                          return <Link href={e.path} key={i+1} className='text-lg leading-[23px] font-medium'><li>{e.name}</li></Link>
                })}
            </ul>
        </div>
        <div className="flex ">
            <Button buttonColor='bg-[#FFE492]'>Login</Button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
