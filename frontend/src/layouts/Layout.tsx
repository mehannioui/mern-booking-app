import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

interface Propos {
  children: React.ReactNode;
}

const Layout = ({ children }: Propos) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <Hero />
      <div className='container mx-auto py-10 flex-1'>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;