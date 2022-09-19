import data from "../assets/Data";
import NavCards from '../components/supComponents/NavCards';
import Product from '../components/product/Product';
import Header from '../components/Header';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadCartState } from "../store/cart_slice";

const Speakers = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadCartState())
  }, [])
  return (
    <>
      <Header Title={"SPEAKERS"} />
      <Product isIt={true} newPro={true} data={data[7]} />
      <Product data={data[8]} />
      <NavCards />
    </>
  );
};

export default Speakers;
