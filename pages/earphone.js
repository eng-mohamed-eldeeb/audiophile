
import MainNav from './../components/MainNav';
import HSubPageoComponent from './../components/HSubPageoComponent';
import Product from './../components/Product';
import NavCards from './supComponents/NavCards';
import AboutS from './../components/AboutS';
import Footer from './../components/Footer';

const earphone = () => {
  return (
    <>
      <MainNav color="#000" />
      <HSubPageoComponent Title="EARPHONES" />
      <Product isIt={true} newPro={true} />
      <NavCards />
      <AboutS />
      <Footer />
    </>
  );
};

export default earphone;
