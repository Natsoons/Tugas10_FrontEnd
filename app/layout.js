import { Inter } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';

import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Inovasi Digital - Solusi Teknologi',
  description: 'Website company profile Inovasi Digital',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <Navbar />
        <main className="container my-5">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}