import styled from "styled-components";
import { ActionButton, DetailButton } from "@components/buttons";
import { Heading } from "@components/headings";
import { ButtonGroup } from "@components/button-group";
import landing from "../public/landing.jpg";
import { BackgroundImage } from "@components/background-image";

export default function Home() {
  return (
    <StyledBackgroundImage
      src={landing}
      alt="Zach and Kirsty sitting on the rocks"
    >
      <StyledHeading>Zach & Kirsty</StyledHeading>
      <Date small>1st August 2023</Date>
      <Location small>Greece, Rhodes, Lindos</Location>
      <LinkContainer>
        <DetailButton href="/details" as="a">
          Details
        </DetailButton>
        <ActionButton href="/rsvp" as="a">
          RSVP
        </ActionButton>
      </LinkContainer>
    </StyledBackgroundImage>
  );
}

Home.hideFooter = true;

const StyledBackgroundImage = styled(BackgroundImage)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors.primaryForeground};
`;

const StyledHeading = styled(Heading)`
  margin-block-end: 20px;
`;

const Date = styled(Heading)`
  margin-block-start: 150px;
`;

const Location = styled(Heading)`
  margin-block-start: ${({ theme }) => theme.margin.large};
`;

const LinkContainer = styled(ButtonGroup)`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-block-start: ${({ theme }) => theme.margin.large};

  button,
  a {
    height: 100%;
    min-width: 86px;
  }
`;
