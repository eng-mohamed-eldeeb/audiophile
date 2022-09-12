import MainNav from "../components/MainNav";
import styled from "styled-components";
import { motion } from "framer-motion";
import TBtn from "./../components/supComponents/TBtn";
import { useRouter } from "next/router";
import data from "../assets/Data";
import Amount from "./../components/supComponents/Amount";
import NavCards from "./../components/supComponents/NavCards";
import AboutS from "./../components/AboutS";
import Footer from "./../components/Footer";
import MaySeeCards from "../components/MaySeeCards";

const MainContent = styled.div`
  padding-top: 10rem;
  width: 100%;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Main = styled(motion.div)`
  width: 70rem;
  background-color: #fff;
  border-radius: 10px;

  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 5rem;
  /* align-items: center; */

  transition: all 0.4s ease;
  @media (max-width: 78rem) {
    width: 90%;
  }
  .imgContainer {
    width: 50%;
    height: 100%;
    border-radius: 10px;
    overflow: hidden;
  }
  img {
    height: 100%;
  }
`;

const ProInfo = styled.div`
  height: 100%;
  width: 50%;

  display: flex;
  flex-direction: column;
  padding-left: 3rem;
  justify-content: center;
  gap: 2rem;
  color: white;
  h2 {
    color: #000;
    font-size: 45px;
  }
  h5 {
    font-size: 20px;
    font-weight: 450;
    color: #d88361d3;
  }
  p {
    color: rgba(0, 0, 0, 0.65);
    font-size: 17px;
    font-weight: 300;
  }
  h3 {
    color: #000;
    font-size: 1.5rem;
  }

  .amoun_container {
    display: flex;
    gap: 1rem;
  }
`;

const FeatureAndInBox = styled.div`
  width: 100%;
  height: 38.6 vh;
  margin: 3rem auto;

  display: flex;
  gap: 5rem;

  h3 {
    font-size: 2rem;
    font-weight: 600;
  }
`;
const Feature = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  td {
    padding: 0.5rem;
  }

  td p {
    color: #d88361d3;
    font-weight: 500;
  }
`;

const Imgs = styled.div`
  padding-bottom: 50px;
  display: flex;
  gap: 2rem;

  img {
    border-radius: 10px;
  }
  div {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  div img {
  }
`;

const ProductInfo = () => {
  const product = data[parseInt(useRouter().query.id)];
  return (
    <>
      <MainNav color="#000" />
      {/* <Container> */}
      <Main initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <a>go back</a>
        <MainContent>
          <div className="imgContainer">
            <img src={product.main_img} />
          </div>
          <ProInfo>
            {/* {props.isNew ? <h5>N E W &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; P R O D U C T</h5> : null} */}
            <h2>{product.name}</h2>
            <p>{product.discription}</p>
            <h3>$ {product.Price}</h3>
            <div className="amoun_container">
              <Amount />
              <TBtn content="ADD TO CART" />
            </div>
          </ProInfo>
        </MainContent>
        <FeatureAndInBox>
          <Feature>
            <h3>FEATURE</h3>
            <p>{product.feature}</p>
          </Feature>
          <InBox>
            <h3>IN THE BOX</h3>
            <table>
              {product.inBox.map((item) => (
                <>
                  <tr>
                    <td>
                      <p className="q">{item.q}x</p>
                    </td>
                    <td>{item.Init}</td>{" "}
                  </tr>
                </>
              ))}
            </table>
          </InBox>
        </FeatureAndInBox>
        <Imgs>
          <div>
            <img src={product.sup_imgs[2]} />
            <img src={product.sup_imgs[1]} />
          </div>
          <img src={product.sup_imgs[0]} />
        </Imgs>
        <MaySeeCards />
        <NavCards />
      </Main>
      <AboutS />
      <Footer />
    </>
  );
};

export default ProductInfo;
