import React, { ReactNode } from 'react'
import Navbar from '../Navbar/Navbar';


type Props = {
  children: ReactNode;
};


export default function MainLayout({children}:Props) {
  return (
    <>
    <Navbar/>
    {children}
    </>
  )
}
