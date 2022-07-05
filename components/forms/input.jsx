import styled, { css } from "styled-components";

const baseStyle = css`
  width: 100%;
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

  margin: 0px;
  margin-block-end: ${({ theme }) => theme.margin.medium};

  font-size: ${({ theme }) => theme.fontSize.medium};
  font-family: ${({ theme }) => theme.font.content};
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

export const RadioGroup = ({ labelText, children, ...other }) => {
  return (
    <div {...other}>
      <Label as="p">{labelText}</Label>
      {children}
    </div>
  );
};

const StyledRadioInput = styled.input`
  appearance: none;
  background-color: #fff;
  margin: 0;
  font: inherit;
  color: currentColor;
  width: 1.15em;
  height: 1.15em;
  border: 0.15em solid currentColor;
  border-radius: 50%;

  display: grid;
  place-content: center;

  &::before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em currentColor;
  }

  &:checked::before {
    transform: scale(1);
  }
`;

const StyledRadioLabel = styled.p`
  display: flex;
  flex-direction: row;
  grid-gap: ${({ theme }) => theme.margin.small};

  margin: 0px;
  margin-block-end: ${({ theme }) => theme.margin.medium};

  font-size: ${({ theme }) => theme.fontSize.medium};
  font-family: ${({ theme }) => theme.font.content};
`;

export const RadioInput = ({ children, ...other }) => {
  return (
    <StyledRadioLabel>
      <StyledRadioInput type="radio" {...other} />
      {children}
    </StyledRadioLabel>
  );
};
