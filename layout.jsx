import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'China Easy Travel | China Travel Guides for Foreign Visitors',
  description: 'Practical China city guides, travel hacks, itineraries, and private tour services for foreign visitors.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
