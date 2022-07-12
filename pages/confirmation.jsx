import styled from "styled-components";
import { ButtonGroup } from "@components/button-group";
import { ActionButton } from "@components/buttons";
import { Heading } from "@components/heading";
import { Text } from "@components/text";

export default function Details() {
  return (
    <>
      <HeroImageContainer>
        <HeroImage />
      </HeroImageContainer>
      <Content>
        <StyledHeading small>Thanks For Confirming</StyledHeading>
        <Text>We can't wait to see you there!</Text>
        <ButtonGroup>
          <ActionButton as="a" href="/rsvp#rsvpFormSection">
            Add Another Person
          </ActionButton>
        </ButtonGroup>
      </Content>
    </>
  );
}

const HeroImageContainer = styled.div`
  background: ${({ theme }) => theme.colors.lightPrimaryHighlight};
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: auto;
`;

const HeroImage = styled.div`
  /* The image used */
  background-image: url("/confirmation.jpg");

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  width: 100%;
  max-width: 1400px;
  height: 50vh;
`;

const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`;

const StyledHeading = styled(Heading)`
  width: 100%;
  text-align: center;

  background: ${({ theme }) => theme.colors.darkPrimaryHighlight};

  padding: ${({ theme }) => theme.margin.large};
  margin-bottom: ${({ theme }) => theme.margin.large};
`;