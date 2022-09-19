import MainNav from "./../components/MainNav";
import Header from "./../components/Header";
import AboutS from "./../components/AboutS";
import Footer from "./../components/Footer";
import data from "./../assets/Data";
import Product from './../components/product/Product';
import NavCards from './../components/supComponents/NavCards';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadCartState } from "../store/cart_slice";

const Earphone = () => {
  const title = "EARPHONES";
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadCartState())
  }, [])
  return (
    <>
      <Header Title={title} />
      <Product isIt={true} newPro={true} data={data[9]} Title={title} />
      <NavCards />
    </>
  );
};

export default Earphone;
