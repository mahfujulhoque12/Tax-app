import React from 'react';
import Head from 'next/head';
import { Menu } from '../Menu';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import Footer from '../Footer/Footer';
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Tax</title>
      </Head>
      <div>
        <Menu/>
        <ProgressBar 
        height="6px"
        color="#83C0C1"    
        />
        {children}
        <Footer></Footer>
        </div>
    </>
  )
}

export default Layout