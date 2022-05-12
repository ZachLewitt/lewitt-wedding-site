import styled, { css } from "styled-components";

const baseStyle = css`
  width: 100%;
  max-width: 500px;
  height: 40px;
  padding: ${({ theme }) => theme.margin.small};
  background-color: ${({ theme }) => theme.colors.inputBackground};
  margin-block-start: ${({ theme }) => theme.margin.small};
  border: 2px solid ${({ theme }) => theme.colors.darkBorder};
  border-radius: ${({ theme }) => theme.borderRadius};
  outline: none;

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.focusedBorder};
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.focusedBorder};
  }
`;

const StyledInput = styled.input`
  ${baseStyle}
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-block-end: ${({ theme }) => theme.margin.medium};
`;

const Input = ({ children, ...other }) => {
  return (
    <Label>
      {children}
      <StyledInput {...other} />
    </Label>
  );
};

export const TextInput = (props) => {
  return <Input type="text" {...props} />;
};

export const NumberInput = (props) => {
  return <Input type="number" {...props} />;
};

export const EmailInput = (props) => {
  return <Input type="email" {...props} />;
};

const StyledSelect = styled.select`
  ${baseStyle}
`;

export const Select = ({ children, labelText, ...other }) => {
  return (
    <Label>
      {labelText}
      <StyledSelect {...other}>{children}</StyledSelect>
    </Label>
  );
};
