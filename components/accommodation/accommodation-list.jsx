import styled from "styled-components";
import Image from "next/image";
import { CardList, CardListItem } from "@components/cards";
import { Text } from "@components/text";
import { ActionButton } from "@components/buttons";

export const AccommodationList = ({ accommodations }) => {
  return (
    <CardList>
      {accommodations.map((x) => (
        <StyledCardListItem>
          <ImageContainer>
            <Image src={x.image} width={660} height={440} />
          </ImageContainer>
          <InfoContainer>
            <CardHeading>{x.name}</CardHeading>
            <CardText small>{x.description}</CardText>
            <StyledButton as="a" href={x.link}>
              View Site
            </StyledButton>
          </InfoContainer>
        </StyledCardListItem>
      ))}
    </CardList>
  );
};

const StyledCardListItem = styled(CardListItem)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardHeading = styled.h3`
  margin-block-start: 0px;
`;

const CardText = styled(Text)``;

const ImageContainer = styled.div`
  align-self: center;
  margin-block-end: ${({ theme }) => theme.margin.medium};
`;

const StyledButton = styled(ActionButton)`

`;
