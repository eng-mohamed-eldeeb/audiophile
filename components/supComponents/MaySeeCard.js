import styled from "styled-components";
import TBtn from "./TBtn";

const Box = styled.div`
  width: 22rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  img {
    border-radius: 10px;
    width: 100%;
  }

  h3 {
    font-size: 1.6rem;
  }
`;

const MaySeeCard = (props) => {
  const data = props.data;
  return (
    <Box>
      <img src={data.main_img} />
      <h3>{props.data.name}</h3>
      <TBtn id={data.id} />
    </Box>
  );
};
export default MaySeeCard;
