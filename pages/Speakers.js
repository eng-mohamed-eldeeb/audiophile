import MainNav from "../components/MainNav";
import data from "../assets/Data";
import Footer from '../components/Footer';
import AboutS from '../components/AboutS';
import NavCards from '../components/supComponents/NavCards';
import Product from '../components/product/Product';
import HSubPageoComponent from '../components/HSubPageoComponent';

const speakers = () => {
  const title = "SPEAKERS";
  return (
    <>
      <MainNav color="#000" />
      <HSubPageoComponent Title={title} />
      <Product isIt={true} newPro={true} data={data[7]} Title={title} />
      <Product data={data[8]} Title={title} />
      <NavCards />
      <AboutS />
      <Footer />
    </>
  );
};

export default speakers;
