import { Raleway } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const raleway = Raleway({ subsets: ['latin'], weight: ['500','600','700'] })


export const metadata = {
  title: 'VanishVox',
  description: 'Say what you want. It disappear after an hour.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${raleway.className}  h-fit `}>
        <main className='flex flex-col gap-12 w-full gradient-purple-to-dark min-h-screen h-full'>
          <Navbar />
          {children}
        </main>
        
      </body>
    </html>
  )
}
