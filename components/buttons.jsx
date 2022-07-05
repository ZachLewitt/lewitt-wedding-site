import styled, { css } from "styled-components";

const baseButtonStyle = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: ${({ theme }) => theme.margin.small};
  min-width: 60px;

  border-radius: 4px;
  font-size: ${({ theme }) => theme.fontSize.medium};
  text-decoration: none;
`;

export const ActionButton = styled.button`
  ${baseButtonStyle}

  color: ${({ theme }) => theme.colors.primaryForeground};
  background: ${({ theme }) => theme.colors.primaryBackground};
  border: none;
`;

export const SubmitButton = styled.button`
  ${baseButtonStyle}

  color: ${({ theme }) => theme.colors.submitForeground};
  background: ${({ theme }) => theme.colors.submitBackground};
  border: none;
`;

export const DetailButton = styled.button`
  ${baseButtonStyle}

  color: ${({ theme }) => theme.colors.primaryForeground};
  background: transparent;
  border: 2px solid ${({ theme }) => theme.colors.primaryForeground};
`;