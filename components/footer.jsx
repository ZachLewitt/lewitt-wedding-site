import styled from "styled-components";
import { ScrollTopButton } from "./scroll-top-button";
import { Text } from "./text";

export const Footer = () => {
  return (
    <StyledFooter>
      <ScrollTopButton />
      <FooterContent>
        <Text small subtle>
          Designed by <strong>Lewitt Technologies</strong>
        </Text>
      </FooterContent>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: ${({ theme }) => theme.margin.large};
  width: 100%;
  background: ${({ theme }) => theme.colors.darkPrimaryHighlight};
`;


