import MainNav from "./../components/MainNav";
import HSubPageoComponent from "./../components/HSubPageoComponent";
import Product from "./../components/Product";
import NavCards from "../components/supComponents/NavCards";
import AboutS from "./../components/AboutS";
import Footer from "./../components/Footer";
import data from "./../assets/Data";

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
