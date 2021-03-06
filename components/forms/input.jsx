import styled, { css } from "styled-components";
import { useState } from "react";
import { FieldError } from "./field-error";

const baseStyle = css`
  width: 100%;

  color: ${({ theme }) => theme.colors.contentForeground};
  background: ${({ theme }) => theme.colors.contentBackground};

  padding: ${({ theme }) => theme.margin.medium};
  margin-block-start: ${({ theme }) => theme.margin.small};
  border: 3px solid ${({ theme }) => theme.colors.lightBorder};
  border-radius: ${({ theme }) => theme.borderRadius};
  outline: none;

  font-size: ${({ theme }) => theme.fontSize.medium};

  &:focus {
    border: 3px solid ${({ theme }) => theme.colors.darkBorder};
  }

  ${({ theme, touched }) =>
    touched &&
    `&:invalid {
        border: 3px solid ${theme.colors.error};
    }`}
`;

const StyledInput = styled.input`
  ${baseStyle}
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;

  margin: 0px;
  margin-block: ${({ theme }) => theme.margin.medium};

  font-size: ${({ theme }) => theme.fontSize.medium};
  font-family: ${({ theme }) => theme.font.content};
  font-weight: bold;
`;

const Input = ({ children, error, onBlur, ...other }) => {
  const [touched, setTouched] = useState(false);

  return (
    <>
      <Label>
        {children}
        <StyledInput
          {...other}
          onBlur={(e) => {
            setTouched(true);
            onBlur(e);
          }}
          onInvalid={(e) => {
            setTouched(true);
          }}
          touched={touched}
        />
      </Label>
      {error && <FieldError>{error}</FieldError>}
    </>
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

export const RadioGroup = ({ labelText, children, error, ...other }) => {
  return (
    <>
      <Label as="p">{labelText}</Label>
      <RadioContainer hasError={!!error} {...other}>{children}</RadioContainer>
      {error && <FieldError>{error}</FieldError>}
    </>
  );
};

const RadioContainer = styled.div`
  border: 3px solid
    ${({ theme, hasError }) =>
      hasError ? theme.colors.error : theme.colors.lightBorder};

  border-radius: ${({ theme }) => theme.borderRadius};

  margin-block-end: ${({ theme }) => theme.margin.medium};
  padding: ${({ theme }) => theme.margin.small} ${({ theme }) => theme.margin.medium};

  &:focus {
    border: 3px solid ${({ theme }) => theme.colors.darkBorder};
  }
`;

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
  margin-block: ${({ theme }) => theme.margin.medium};

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
