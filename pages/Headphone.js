import MainNav from "../components/MainNav";
import Footer from "../components/Footer";
import Product from '../components/product/Product';
import NavCards from '../components/supComponents/NavCards';
import AboutS from '../components/AboutS';
import data from '../assets/Data';
import Header from '../components/Header';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadCartState } from "../store/cart_slice";

const headphone = () => {
  const title = "HEADPHONES";
  const Dispatch = useDispatch()
  useEffect(() => {
    Dispatch(loadCartState())
  }, [])
  return (
    <>
      <Header Title={title} />
      <Product isIt={true} newPro={true} data={data[4]} Title={title} />
      <Product isIt={false} data={data[5]} Title={title} />
      <Product isIt={true} data={data[6]} Title={title} />
      <NavCards />
    </>
  );
};

export default headphone;
