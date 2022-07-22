import styled from "styled-components";
import Image from "next/image";
import { CardList, CardListItem } from "@components/cards";
import { Text } from "@components/text";
import { ActionButton } from "@components/buttons";

export const AccommodationList = ({ accommodations }) => {
  return (
    <CardList>
      {accommodations.map((x) => (
        <StyledCardListItem key={x.name}>
          <ImageContainer>
            <Image src={x.image} width={660} height={440} placeholder="blur" />
          </ImageContainer>
            <CardHeading>{x.name}</CardHeading>
            <CardText small>{x.description}</CardText>
            <StyledButton as="a" href={x.link}>
              View Site
            </StyledButton>
        </StyledCardListItem>
      ))}
    </CardList>
  );
};

const StyledCardListItem = styled(CardListItem)`
  display: grid;
  grid-template-columns: 240px 1fr;
  grid-gap: ${({ theme }) => theme.margin.medium};

  @media only screen and (max-width: 600px) {
    grid-template-columns: auto;
  }
`;

const CardHeading = styled.h3`
  grid-row: 1;
  grid-column: 2;

  margin-block: 0px;

  border-block-end: 1px solid ${({ theme }) => theme.colors.lightBorder};
  padding-block-end: ${({ theme }) => theme.margin.small};

  @media only screen and (max-width: 600px) {
    grid-row: 2;
    grid-column: 1 / span 2;

    margin-block-start: ${({ theme }) => theme.margin.medium};
    margin-block-end: ${({ theme }) => theme.margin.small};
  }
`;

const CardText = styled(Text)`
  grid-row: 2;
  grid-column: 2;

  margin-block: 0px;

  @media only screen and (max-width: 600px) {
    grid-row: 3;
    grid-column: 1 / span 2;

    margin-block-end: ${({ theme }) => theme.margin.small};
  }
`;

const ImageContainer = styled.div`
  grid-row: 1 / span 3;
  grid-column: 1;
  
  align-self: center;

  @media only screen and (max-width: 600px) {
    grid-row: 1;
    grid-column: 1 / span 2;
  }
`;

const StyledButton = styled(ActionButton)`
  grid-row: 3;
  grid-column: 2;

  align-self: center;
  justify-self: end;

  @media only screen and (max-width: 600px) {
    grid-row: 4;
    grid-column: 1 / span 2;

    justify-self: center;
    width: 80%
  }
`;
