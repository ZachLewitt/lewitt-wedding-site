import Link from "next/link";
import styled from "styled-components";
import { darken } from "polished";
import { ScrollTopButton } from "./scroll-top-button";
import { Text } from "./text";

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledScrollButton />
      <FooterContainer>
        <FooterHeading>Links</FooterHeading>
        <FooterNav>
          <Link href="/rsvp" passHref>
            <NavItem>RSVP</NavItem>
          </Link>
          <Link href="/details" passHref>
            <NavItem>Details</NavItem>
          </Link>
          <Link href="/itinerary" passHref>
            <NavItem>Itinerary</NavItem>
          </Link>
          <Link href="/accommodation" passHref>
            <NavItem>Accommodation</NavItem>
          </Link>
        </FooterNav>
      </FooterContainer>
      <SignatureBanner>
        <Text small>
          Designed by <strong>Lewitt Technologies</strong>
        </Text>
      </SignatureBanner>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: ${({ theme }) => theme.colors.lightPrimaryHighlight};
  margin-block-start: 50px;
`;

const StyledScrollButton = styled(ScrollTopButton)`
  position: relative;
  top: -25px;
`;

const FooterContainer = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.maxContentSize};
  margin-block-end: ${({ theme }) => theme.margin.large};
`;

export const FooterHeading = styled.h5`
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-family: ${({ theme }) => theme.font.content};
  font-weight: bold;
  margin-block: 0px;
  margin-block-end: ${({ theme }) => theme.margin.medium};
  width: 100%;
  max-width: 700px;
  text-align: center;
  padding-block-end: ${({ theme }) => theme.margin.small};
  border-block-end: 1px solid ${({ theme }) => theme.colors.lightBorder};
`;

const FooterNav = styled.nav`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: ${({ theme }) => theme.margin.medium};
  justify-items: center;

  margin-block-end: ${({ theme }) => theme.margin.medium};
  width: 100%;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const NavItem = styled.a`
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-family: ${({ theme }) => theme.font.content};
  color: ${({ theme }) => theme.colors.contentForeground};

  &:hover {
    color:${({ theme }) => darken(0.2, theme.colors.contentForeground)};
  }
`;

const SignatureBanner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: ${({ theme }) => theme.margin.large};
  width: 100%;
  background: ${({ theme }) => theme.colors.darkPrimaryHighlight};
`;
