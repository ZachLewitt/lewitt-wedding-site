import styled from "styled-components";
import Image from "next/image";
import Lindos from "../public/lindos.jpg";

export const MainImage = ({ ...other }) => {
  return (
    <Container>
      <StyledImage src={Lindos} />
      <Overlay>
        <h1>Zach & Kirsty</h1>
        <p>01/08/2023</p>
      </Overlay>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  color: #FFF;
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  font-weight: bold;
  text-align: right;
  font-size: 30px;
  background: rgb(0, 0, 0, 0.1);
  width: 100%;
  height: 100%;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
  position: relative;
`;
