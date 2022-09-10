import MainNav from './../components/MainNav';
import HSubPageoComponent from '../components/HSubPageoComponent';
import Product from './../components/Product';
import NavCards from '../components/supComponents/NavCards';
import AboutS from '../components/AboutS';
import Footer from '../components/Footer';


const speakers = () => {
  return (
    <>
      <MainNav color="#000" />
      <HSubPageoComponent Title="SPEAKERS" />
      <Product isIt={true} newPro={true} img="https://a331998513.github.io/audiophile-ecommerce-website/static/media/image-zx9.598799e2.jpg" />
      <Product img="https://a331998513.github.io/audiophile-ecommerce-website/static/media/image-zx7.4601003a.jpg"/>
      <NavCards />
      <AboutS />
      <Footer />

    </>
  );
};

export default speakers;
