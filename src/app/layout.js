import { Navbar } from '@/components/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import { Footer } from '@/components/footer/Footer'
import { ThemeContextProvider } from '../context/ThemeContext'
import ThemeProvider from './provider/ThemeProvider'
import { Work_Sans } from 'next/font/google'
import AuthProvider from './provider/AuthProvider'

const inter = Inter({ subsets: ['latin'] })
const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata = {
  title: 'Blog App',
  description: 'The best blog app!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${workSans.className}`}>
        <AuthProvider>
        <ThemeContextProvider>
          <ThemeProvider>
        <div className='container'>
          <div className='wrapper'>
            <Navbar/>
            {children}
            <Footer/>
          </div>
        </div>
        </ThemeProvider>
        </ThemeContextProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
