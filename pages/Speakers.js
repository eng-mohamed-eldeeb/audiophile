import MainNav from "./../components/MainNav";
import HSubPageoComponent from "../components/HSubPageoComponent";
import Product from "./../components/Product";
import NavCards from "../components/supComponents/NavCards";
import AboutS from "../components/AboutS";
import Footer from "../components/Footer";
import data from "./../assets/Data";

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
