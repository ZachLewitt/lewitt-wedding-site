import styled from "styled-components";
import { transparentize } from "polished";
import { ActionButton } from "@components/buttons";
import { Heading } from "@components/headings";
import { Text } from "@components/text";
import { Separator } from "./separator";
import { BackgroundImage } from "./background-image";
import image from "../public/confirmation.jpg";

export const Confirmation = ({ headingText, summaryText, linkText }) => {
  return (
    <>
      <StyledBackgroundImage
        src={image}
        alt="Zach and Kirsty watching the sunset"
      >
        <Modal>
          <Heading>{headingText}</Heading>
          <StyledSeparator thick />
          <StyledText>{summaryText}</StyledText>
          <ActionButton as="a" href="/rsvp#rsvpFormSection">
            {linkText}
          </ActionButton>
        </Modal>
      </StyledBackgroundImage>
    </>
  );
};

const StyledBackgroundImage = styled(BackgroundImage)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 90%;
  max-width: ${({ theme }) => theme.maxModalSize};

  background-color: ${({ theme }) =>
    transparentize(0.1, theme.colors.contentBackground)};
  border: 1px solid ${({ theme }) => theme.colors.lightBorder};

  padding: ${({ theme }) => theme.margin.large};
`;

const StyledSeparator = styled(Separator)`
  margin-block-start: ${({ theme }) => theme.margin.small};
  margin-block-end: ${({ theme }) => theme.margin.large};
`;

const StyledText = styled(Text)`
  text-align: center;
`;
