import styled from "styled-components";
import { transparentize } from "polished";
import { ButtonGroup } from "@components/button-group";
import { ActionButton } from "@components/buttons";
import { Heading } from "@components/heading";
import { Text } from "@components/text";

export default function Details() {
  return (
    <>
      <Image>
        <ImageOverlay>
          <Content>
            <StyledHeading>Thanks For Confirming</StyledHeading>
            <ActionContainer>
              <Text bold>We can't wait to see you there!</Text>
              <ActionButton as="a" href="/rsvp#rsvpFormSection">
                Confirm Another Person
              </ActionButton>
            </ActionContainer>
          </Content>
        </ImageOverlay>
      </Image>
    </>
  );
}

const ImageOverlay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.2);

  width: 100%;
  height: 100%;
`;

const Image = styled.div`
  /* The image used */
  background-image: url("/confirmation.jpg");

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ActionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


  width: 90%;

  background-color: ${({ theme }) =>
    transparentize(0.1, theme.colors.contentBackground)};
  border: 1px solid ${({ theme }) => theme.colors.lightBorder};

  padding: ${({ theme }) => theme.margin.large};
`;

const StyledHeading = styled(Heading)`
  color: ${({ theme }) => theme.colors.primaryForeground};
  margin-bottom: ${({ theme }) => theme.margin.extraExtraLarge};
`;
