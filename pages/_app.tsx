



import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/SideBar'
import { GoogleOAuthProvider } from '@react-oauth/google'


const MyApp =({ Component, pageProps }: AppProps) =>{
  const [isSsr, setisSsr] = useState(true)
useEffect(() => {
  setisSsr(false)

}, [])
if(isSsr) return null ;

return (
  <GoogleOAuthProvider clientId= {`${process.env.NEXT_PUBLIC_GOOGLE_API_TOKEN}`}>
    <Navbar  />
    <div className='flex gap-6 md:gap-20'>
      <div className='h[92vh] overFlow-hidden xl-overFlow-auto'>
       <Sidebar   />
      </div>
      <div className='mt-4 flex gap-10 flex-col overflow-auto h[88vh] videos flex-1  '>
      <Component {...pageProps} />
      </div>

    </div>
  </GoogleOAuthProvider>
)}

export default MyApp 
