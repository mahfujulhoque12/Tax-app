'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import Menu from './components/Menu/Menu';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Menu></Menu>
        <ProgressBar 
        height="6px"
        color="#83C0C1"    
        />
        {children}
        
        </body>
    </html>
  );
}
