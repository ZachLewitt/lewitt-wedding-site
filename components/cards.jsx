import Image from "next/image";
import { Fade } from "react-reveal";
import styled, { css } from "styled-components";

const containerStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  //background: ${({ theme }) => theme.colors.darkSecondaryHighlight};
  background-image: linear-gradient(
    to bottom right,
    ${({ theme }) => theme.colors.lightSecondaryHighlight},
    ${({ theme }) => theme.colors.lightPrimaryHighlight}
  );
  padding: ${({ theme }) => theme.margin.extraExtraLarge}
    ${({ theme }) => theme.margin.medium};
  grid-gap: ${({ theme }) => theme.margin.medium};
`;

export const CardContainer = styled.div`
  ${containerStyles}
`;

const CardWrapper = styled.div`
  max-width: 700px;
  width: 100%;
`;

const CardBox = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.margin.large};

  background: ${({ theme }) => theme.colors.contentBackground};
  border: 1px solid ${({ theme }) => theme.colors.lightBorder};
`;

const FadingCard = ({ fade, left, right, as, children }) => {
  if (!left && !right) {
    left = true;
  }

  if (fade) {
    return (
      <CardWrapper as={as}>
        <Fade left={left} right={right}>
          {children}
        </Fade>
      </CardWrapper>
    );
  }

  return <CardWrapper as={as}>{children}</CardWrapper>;
};

export const Card = ({ fade, left, right, children, ...other }) => {
  return (
    <FadingCard fade={fade} left={left} right={right}>
      <CardBox {...other}>{children}</CardBox>
    </FadingCard>
  );
};

export const CardImage = ({ fade, left, right, ...other }) => {
  return (
    <FadingCard fade={fade} left={left} right={right}>
      <Image {...other} />
    </FadingCard>
  );
};

export const CardList = styled.ul`
  ${containerStyles}

  list-style-type: none;
`;

export const CardListItem = ({ fade, left, right, children, ...other }) => {
  return (
    <FadingCard fade={fade} left={left} right={right} as="li">
      <CardBox {...other}>{children}</CardBox>
    </FadingCard>
  );
};
