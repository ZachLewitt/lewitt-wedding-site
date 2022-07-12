import styled from "styled-components";
import { ButtonGroup } from "@components/button-group";
import { ActionButton } from "@components/buttons";

export default function Details() {
  return (
    <>
      <TopContainer>
        <Container></Container>
      </TopContainer>
      <ButtonGroup>
        <ActionButton as="a" href="/rsvp#rsvpForm">
          Add Another Person
        </ActionButton>
      </ButtonGroup>
    </>
  );
}

const TopContainer = styled.div`
  background: ${({ theme }) => theme.colors.lightPrimaryHighlight};
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: auto;
`;

const Container = styled.div`
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
