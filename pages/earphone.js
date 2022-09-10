import MainNav from "./../components/MainNav";
import HSubPageoComponent from "./../components/HSubPageoComponent";
import Product from "./../components/Product";
import NavCards from "../components/supComponents/NavCards";
import AboutS from "./../components/AboutS";
import Footer from "./../components/Footer";

const earphone = () => {
  return (
    <>
      <MainNav color="#000" />
      <HSubPageoComponent Title="EARPHONES" />
      <Product
        isIt={true}
        newPro={true}
        img="https://a331998513.github.io/audiophile-ecommerce-website/static/media/image-yx1-earphones.a059b67b.jpg"
      />
      <NavCards />
      <AboutS />
      <Footer />
    </>
  );
};

export default earphone;
