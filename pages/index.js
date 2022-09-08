import Link from "next/link";
import MainNav from '../components/nav';
import MainHomeComponenet from './../components/MainHomeComponenet';
import NavCards from './supComponents/NavCards';
import RightToLeftC from './../components/RightToLeftC';
import LeftToLRightC from "../components/LeftToLRightC";
import AboutS from './../components/AboutS';
import Footer from './../components/Footer';
import PremiumProduct from './../components/PremiumProduct';

function HomePage() {
  return (
    <>
      <MainNav />
      <MainHomeComponenet />
      <NavCards />
      <PremiumProduct />
      <RightToLeftC />
      <LeftToLRightC />
      <AboutS />
      <Footer />
    </>
  );
}

export default HomePage;