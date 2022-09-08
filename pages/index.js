import Link from "next/link";
import MainNav from '../components/nav';
import MainHomeComponenet from './../components/MainHomeComponenet';
import NavCards from './../components/NavCards';
import NewProduct from '../components/NewProduct';
import RightToLeftC from './../components/RightToLeftC';
import LeftToLRightC from "../components/LeftToLRightC";
import AboutS from './../components/AboutS';
import Footer from './../components/Footer';

function HomePage() {
  return (
    <>
      <MainNav />
      <MainHomeComponenet />
      <NavCards />
      <NewProduct />
      <RightToLeftC />
      <LeftToLRightC />
      <AboutS />
      <Footer />
    </>
  );
}

export default HomePage;