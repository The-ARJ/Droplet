import './globals.css'

export const metadata = {
  title: 'Cardova',
  description: 'Unlock Your Digital Presence with Professional Business Cards',
  icons: {
    icon: '/assets/logo.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
