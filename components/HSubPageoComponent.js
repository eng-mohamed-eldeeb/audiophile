import styled from "styled-components";

const Box = styled.section`
  background-color: #000;
  height: 36.6vh;
  color: #fff;
  width: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  h1{
      font-size: 40px;
    margin-top: 5rem;
  }
`;

const HSubPageoComponent = (props) => {
  return (
    <Box>
      <h1>{props.Title}</h1>
    </Box>
  );
};

export default HSubPageoComponent;
