import styled from "styled-components";
import Image from "next/image";
import { Heading } from "./headings";

export const PageWrapper = ({ heading, image, children }) => {
  return (
    <>
      <TitleWrapper>
        <ImageWrapper>
          <StyledImage src={image} priority placeholder="blur" />
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
  border-radius: 50%;
  overflow: hidden;

  @media only screen and (max-width: 600px) {
    width: 250px;
  }
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: ${({ theme }) => theme.margin.large};

  background: ${({ theme }) => theme.colors.lightPrimaryHighlight};

  width: 100%;
  padding-top: ${({ theme }) => theme.margin.large};
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  padding-top: ${({ theme }) => theme.margin.large};
`;

const HeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.colors.darkPrimaryHighlight};
  
  width: 100%;
  padding: ${({ theme }) => theme.margin.large};
`;
