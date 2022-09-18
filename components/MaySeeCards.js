import MaySeeCard from "./supComponents/MaySeeCard";
import styled from 'styled-components';
import data from '../assets/Data'
const Box = styled.div`
width: 100%;

display: flex;
justify-content: space-between;
`

const MaySeeCards = () => {
  return (
    <>
      <h1>YOU MAY ALSO LIKE</h1>
      <Box>
        <MaySeeCard data={data[3]} />
        <MaySeeCard data={data[5]} />
        <MaySeeCard data={data[0]} />
      </Box>
    </>
  );
};
export default MaySeeCards;
