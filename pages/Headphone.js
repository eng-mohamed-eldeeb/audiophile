import MainNav from "./../components/MainNav";
import Footer from "../components/Footer";
import Product from './../components/product/Product';
import NavCards from './../components/supComponents/NavCards';
import AboutS from './../components/AboutS';
import data from './../assets/Data';
import HSubPageoComponent from './../components/HSubPageoComponent';

const headphone = () => {
  const title = "HEADPHONES";
  return (
    <>
      <MainNav color="#000" />
      <HSubPageoComponent Title={title} />
      <Product isIt={true} newPro={true} data={data[4]} Title={title} />
      <Product isIt={false} data={data[5]} Title={title} />
      <Product isIt={true} data={data[6]} Title={title} />
      <NavCards />
      <AboutS />
      <Footer />
    </>
  );
};

export default headphone;
