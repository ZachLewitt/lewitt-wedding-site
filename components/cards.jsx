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
`;

const cardStyles = css`
  max-width: 700px;
  width: 100%;
  padding: ${({ theme }) => theme.margin.large};

  background: ${({ theme }) => theme.colors.contentBackground};
  border: 1px solid ${({ theme }) => theme.colors.lightBorder};
`;

export const CardContainer = styled.div`
  ${containerStyles}
`;

export const Card = styled.div`
  ${cardStyles}
`;

export const CardList = styled.ul`
  ${containerStyles}

  list-style-type: none;
`;

export const CardListItem = styled.li`
  ${cardStyles}

  margin: ${({ theme }) => theme.margin.medium} 0px;
`;
