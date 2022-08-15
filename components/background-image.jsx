import styled from "styled-components";
import Image from "next/image";

export const BackgroundImage = ({ children, src, ...other }) => {
  return (
    <Container>
      <StyledImage
        src={src}
        layout="fill"
        priority
        objectFit="cover"
        placeholder="blur"
        loading="eager"
      />
      <Overlay {...other}>{children}</Overlay>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`;

const Overlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;

  background: rgb(0, 0, 0, 0.3);

  z-index: 1;
`;

const StyledImage = styled(Image)`
  z-index: 0;
`;
