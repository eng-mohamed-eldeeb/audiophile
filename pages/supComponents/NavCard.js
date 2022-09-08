import styled from "styled-components";

const Card = styled.div`
  height: 100%;
  width: 340px;
  background: linear-gradient(0, #f1f1f1 70%, rgba(144, 144, 144, 0) 0);
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const NavCard = () => {
  return <Card>
    <p>img</p>
    <p>head</p>
    <p>shop</p>
  </Card>;
};

export default NavCard;
