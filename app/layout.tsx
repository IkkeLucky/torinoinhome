import { Nunito } from 'next/font/google'


import './globals.css'
import Navbar from './components/navbar/navbar'
import ClientOnly from './components/clientonly' 
import RegisterModal from './components/modals/registerModal'
import ToasterProvider from './components/providers/ToasterProvider'


export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}

const font = Nunito ({
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
