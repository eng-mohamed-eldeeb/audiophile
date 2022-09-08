import MainNav from "./../components/MainNav";
import HSubPageoComponent from "../components/HSubPageoComponent";
import Product from './../components/Product';
import NavCards from "./supComponents/NavCards";
import AboutS from "../components/AboutS";
import Footer from "../components/Footer";
const headphone = () => {
  return (
    <>
      <MainNav color="#000" />
      <HSubPageoComponent Title="HEADPHONES" />
      <Product isIt={true} newPro={true} />
      <Product />
      <Product isIt={true} />
      <NavCards />
      <AboutS />
      <Footer />
    </>
  );
};

export default headphone;
