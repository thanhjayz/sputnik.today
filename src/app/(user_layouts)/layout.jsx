//import s from './styles.module.scss';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
const UserLayout = ({ children }) => {
    return (
      <>
        <Header />
        <main className="">{children}</main>
        <Footer />
      </>
    );
  };
  
  export default UserLayout;