import styled from "styled-components";
import Image from "next/image";
import { Heading } from "./Heading";

export const PageWrapper = ({ heading, image, children }) => {
  return (
    <>
      <TitleWrapper>
        <ImageWrapper>
          <StyledImage src={image} />
        </ImageWrapper>
        <HeadingWrapper>
          <Heading>{heading}</Heading>
        </HeadingWrapper>
      </TitleWrapper>
      <ContentWrapper>{children}</ContentWrapper>
    </>
  );
};

const ImageWrapper = styled.div`
  width: 500px;

  @media only screen and (max-width: 600px) {
    width: 250px;
  }
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;

  border-radius: 50%;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: ${({ theme }) => theme.margin.large};

  background: #daeaf1;

  width: 100%;
  padding-top: ${({ theme }) => theme.margin.large};
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  width: 100%;
  max-width: 700px;
  padding: ${({ theme }) => theme.margin.large};
`;

const HeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background: #C6DCE4;
  
  width: 100%;
  padding: ${({ theme }) => theme.margin.large};
`;
