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

const StyledRadioLabel = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  grid-gap: ${({ theme }) => theme.margin.small};

  margin: 0px;
  margin-block: ${({ theme }) => theme.margin.medium};

  font-size: ${({ theme }) => theme.fontSize.medium};
  font-family: ${({ theme }) => theme.font.content};
`;

const RadioInputContainer = styled.span`
  position: relative;
  height: 1.4rem;
  width: 1.4rem;
`;

const StyledRadioInput = styled.input`
  appearance: none;
  position: absolute;

  width: 100%;
  height: 100%;
  margin: 0px;

  &:checked ~ *::before {
    opacity: 1;
    width: 0.65rem;
    height: 0.65rem;
  }

  &:checked ~ * {
    border: 3px solid ${({ theme }) => theme.colors.contentForeground};
  }
`;

const RadioIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  border: 3px solid ${({theme}) => theme.colors.lightBorder};
  border-radius: 50%;

  &::before {
    content: "";
    width: 0px;
    height: 0px;  

    background: ${({theme}) => theme.colors.contentForeground};
    border-radius: 50%;
    opacity 0;

    transition: opacity 500ms;
  }
`;

export const RadioInput = ({ children, ...other }) => {
  return (
    <StyledRadioLabel>
      <RadioInputContainer>
        <StyledRadioInput type="radio" {...other} />
        <RadioIcon />
      </RadioInputContainer>
      {children}
    </StyledRadioLabel>
  );
};
