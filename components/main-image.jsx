import styled from "styled-components";
import Image from "next/image";

export const MainImage = ({ children, file }) => {
  return (
    <Container>
      <StyledImage src={file} />
      <Overlay>
        { children }      
      </Overlay>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  color: ${({ theme }) => theme.colors.primaryForeground};
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  background: rgb(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
  position: relative;
`;
