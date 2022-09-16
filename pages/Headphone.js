import MainNav from "./../components/MainNav";
import HSubPageoComponent from "../components/HSubPageoComponent";
import Product from "./../components/Product";
import NavCards from "../components/supComponents/NavCards";
import AboutS from "../components/AboutS";
import Footer from "../components/Footer";
import data from "../assets/Data";

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
