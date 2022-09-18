import MainNav from '../components/MainNav';
import MainHomeComponenet from './../components/MainHomeComponenet';
import NavCards from '../components/supComponents/NavCards';
import AboutS from './../components/AboutS';
import Footer from './../components/Footer';
import RightToLeftC from './../components/product/RightToLeftC';
import LeftToLRightC from './../components/product/LeftToLRightC';
import PremiumProduct from './../components/product/PremiumProduct';
import data from './../assets/Data';


function HomePage() {
  return (
    <>
      <MainNav color="#191919" />
      <MainHomeComponenet data={data[0]} />
      <NavCards />
      <PremiumProduct data= {data[1]} />
      <RightToLeftC data= {data[2]}/>
      <LeftToLRightC data= {data[3]}/>
      <AboutS />
      <Footer />
    </>
  );
}

export default HomePage;