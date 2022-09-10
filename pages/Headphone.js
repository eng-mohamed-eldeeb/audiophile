import MainNav from "./../components/MainNav";
import HSubPageoComponent from "../components/HSubPageoComponent";
import Product from "./../components/Product";
import NavCards from "../components/supComponents/NavCards";
import AboutS from "../components/AboutS";
import Footer from "../components/Footer";
const headphone = () => {
  return (
    <>
      <MainNav color="#000" />
      <HSubPageoComponent Title="HEADPHONES" />
      <Product
        isIt={true}
        newPro={true}
        img="https://a331998513.github.io/audiophile-ecommerce-website/static/media/image-xx99-mark-two.0f14e428.jpg"
      />
      <Product img="https://a331998513.github.io/audiophile-ecommerce-website/static/media/image-xx99-mark-one.3807b3ee.jpg" />
      <Product
        isIt={true}
        img="https://a331998513.github.io/audiophile-ecommerce-website/static/media/image-xx59.77d41dad.jpg"
      />
      <NavCards />
      <AboutS />
      <Footer />
    </>
  );
};

export default headphone;
