import { Playfair_Display, Raleway } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const playfair_display = Playfair_Display({ subsets: ['latin'], weight: ['700'] })
const raleway = Raleway({ subsets: ['latin'], weight: ['500','600','700'] })

export const metadata = {
  title: 'VanishVox',
  description: 'Say what you want. It disappear after an hour.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${raleway.className} bg-purple-700`}>
        <main>
          <Navbar />
          {children}
        </main>
        
      </body>
    </html>
  )
}
