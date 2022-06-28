import styled from "styled-components";
import Image from "next/image";
import image from "../public/details.jpg";
import { Heading } from "@components/Heading"

export default function Details() {
  return (
    <>
      <TitleWrapper>
        <ImageWrapper>
          <StyledImage src={image} />
        </ImageWrapper>
        <Heading>Welcome</Heading>
      </TitleWrapper>
    </>
  );
}

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
  grid-gap: 30px;

  background: #EEE;

  width: 100%;
  padding: 30px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 12px;

  width: 100%;
  max-width: 700px;
  padding-block: 30px;
`;

const Key = styled.p`
  display: inline-flex;
  align-items: center;
  height: 50px;
  width: 100%;
  align-self: start;
  background: #ff9200;
  color: #FFF;
  padding-inline-start: 30px;
  font-size: 1.5rem;
  margin: 0px;
  border-radius: 4px;
`;

const Value = styled.p`
  align-self: start;
  padding-inline-start: 30px;
  margin: 0px;
`;