import styled, { css } from "styled-components";
import { darken, transparentize } from "polished";

const baseButtonStyle = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: ${({ theme }) => theme.margin.medium};
  min-width: 60px;

  border-radius: 4px;
  font-size: ${({ theme }) => theme.fontSize.medium};

  text-decoration: none;
  transition-duration: 0.4s;
`;

export const ActionButton = styled.button`
  ${baseButtonStyle}

  color: ${({ theme }) => theme.colors.primaryForeground};
  background: ${({ theme }) => theme.colors.primaryBackground};

  border: none;

  &:hover {
    background: ${({ theme }) => darken(0.2, theme.colors.primaryBackground)};
  }

  &:active {
    background: ${({ theme }) => darken(0.4, theme.colors.primaryBackground)};
  }
`;

export const SubmitButton = styled.button`
  ${baseButtonStyle}

  color: ${({ theme }) => theme.colors.submitForeground};
  background: ${({ theme }) => theme.colors.submitBackground};

  padding: ${({ theme }) => theme.margin.large};

  width: 100%;
  max-width:500px;

  border: none;

  &:hover {
    background: ${({ theme }) => darken(0.2, theme.colors.submitBackground)};
  }

  &:active {
    background: ${({ theme }) => darken(0.4, theme.colors.submitBackground)};
  }

  &:disabled {
    background: ${({ theme }) => transparentize(0.4, theme.colors.submitBackground)};
  }
`;

export const DetailButton = styled.button`
  ${baseButtonStyle}

  color: ${({ theme }) => theme.colors.primaryForeground};
  background: transparent;
  border: 2px solid ${({ theme }) => theme.colors.primaryForeground};

  &:hover {
    color: ${({ theme }) => theme.colors.contentForeground};
    background: ${({ theme }) => theme.colors.primaryForeground};
  }

  &:active {
    color: ${({ theme }) => theme.colors.contentForeground};
    background: ${({ theme }) => darken(0.4, theme.colors.primaryForeground)};
    border: 2px solid
      ${({ theme }) => darken(0.4, theme.colors.primaryForeground)};
  }
`;
