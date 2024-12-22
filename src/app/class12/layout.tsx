import Footer from '@/components/whitespaceComponents/Footer'
import Navbar from '@/components/whitespaceComponents/Navbar'
import React from 'react'

const WhiteSpaceLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <html lang="en">
      <body
        
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}

export default WhiteSpaceLayout
