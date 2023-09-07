import { AppstateProvider } from './appContext/appState'
import './globals.css'
import { Assistant } from 'next/font/google'

const inter = Assistant({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-hidden`}>
        <AppstateProvider>
        {children}
        </AppstateProvider>
        </body>
    </html>
  )
}
