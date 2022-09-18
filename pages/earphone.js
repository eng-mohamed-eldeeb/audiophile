import MainNav from "./../components/MainNav";
import HSubPageoComponent from "./../components/HSubPageoComponent";
import AboutS from "./../components/AboutS";
import Footer from "./../components/Footer";
import data from "./../assets/Data";
import Product from './../components/product/Product';
import NavCards from './../components/supComponents/NavCards';

const earphone = () => {
  const title = "EARPHONES";
  return (
    <>
      <MainNav color="#000" />
      <HSubPageoComponent Title={title} />
      <Product isIt={true} newPro={true} data={data[9]} Title={title} />
      <NavCards />
      <AboutS />
      <Footer />
    </>
  );
};

export default earphone;
