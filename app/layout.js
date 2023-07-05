import { UserProvider } from '@/utils/Context/UserProvider'
import './globals.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

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
        <UserProvider>{children}
          <ToastContainer />
        </UserProvider>
      </body>
    </html>
  )
}
