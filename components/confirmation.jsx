import styled from "styled-components";
import { transparentize } from "polished";
import { ActionButton } from "@components/buttons";
import { Heading } from "@components/headings";
import { Text } from "@components/text";

export const Confirmation = ({ headingText, summaryText, linkText }) => {
  return (
    <>
      <Image>
        <ImageOverlay>
          <Content>
            <StyledHeading>{headingText}</StyledHeading>
            <ActionContainer>
              <StyledText bold>{summaryText}</StyledText>
              <ActionButton as="a" href="/rsvp#rsvpFormSection">
                {linkText}
              </ActionButton>
            </ActionContainer>
          </Content>
        </ImageOverlay>
      </Image>
    </>
  );
};

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

const StyledText = styled(Text)`
  text-align: center;
`;
