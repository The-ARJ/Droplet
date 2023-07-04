import Header from '@/components/landingComponents/Header'
import './globals.css'
import Footer from '@/components/landingComponents/Footer'

export const metadata = {
  title: 'Cardova - Revolutionizing Networking Connection',
  description: 'Unlock Your Digital Presence with Professional Business Cards',
  icons: {
    icon: '/assets/logo.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
