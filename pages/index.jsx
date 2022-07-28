import styled from "styled-components";
import { ActionButton, DetailButton } from "@components/buttons";
import { Heading } from "@components/headings";
import { ButtonGroup } from "@components/button-group";
import Image from "next/image";
import landing from "../public/landing.jpg";
import { Layout } from "@components/layout";

export default function Home() {
  return (
    <>
      <StyledImage
        src={landing}
        layout="fill"
        priority
        objectFit="cover"
        quality={100}
        placeholder="blur"
        loading="eager"
      />
      <Content>
        <StyledHeading>Zach & Kirsty</StyledHeading>
        <Date>1st August 2023</Date>
        <Location>Greece, Rhodes, Lindos</Location>
        <LinkContainer>
          <DetailButton href="/details" as="a">
            Details
          </DetailButton>
          <ActionButton href="/rsvp" as="a">
            RSVP
          </ActionButton>
        </LinkContainer>
      </Content>
    </>
  );
}

Home.hideFooter = true;

const StyledImage = styled(Image)`
  z-index: 0;
`;

const Content = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;

  z-index: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.2);
  color: ${({ theme }) => theme.colors.primaryForeground};
`;

const StyledHeading = styled(Heading)`
  margin-block-end: 20px;
`;

const Date = styled.span`
  font-size: ${({ theme }) => theme.fontSize.large};
  font-family: ${({ theme }) => theme.font.title};

  margin-block-start: 150px;
`;

const Location = styled.span`
  font-size: ${({ theme }) => theme.fontSize.large};
  font-family: ${({ theme }) => theme.font.title};

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
