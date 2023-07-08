import { CommonProvider } from '@/utils/Context/CommonProvider'
import './globals.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Header from '@/components/landingComponents/Header';
import Footer from '@/components/landingComponents/Footer';

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
      <body className=' bg-gray-100 dark:bg-[#18181b]'>
        <CommonProvider>
          {children}
          <ToastContainer />
        </CommonProvider>
      </body>
    </html>
  )
}
