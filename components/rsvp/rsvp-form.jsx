import { useCallback, useRef, useState } from "react";
import styled from "styled-components";
import {
  Fieldset,
  TextInput,
  EmailInput,
  Legend,
  Form,
  RadioInput,
  RadioGroup,
} from "@components/forms";
import { Section } from "@components/section";
import { Separator } from "@components/separator";
import { SubmitButton } from "@components/buttons";

export const RsvpForm = () => {
  const formRef = useRef();
  const {
    handleSubmit,
    isSubmitting,
    firstName,
    firstNameError,
    setFirstName,
    lastName,
    lastNameError,
    setLastName,
    email,
    emailError,
    setEmail,
    attending,
    attendingError,
    setAttending,
  } = useForm(formRef);

  return (
    <Container>
      <StyledSection id="rsvpFormSection">
        <Form
          id="rsvpForm"
          ref={formRef}
          onSubmit={handleSubmit}
          name="rsvp"
          data-netlify="true"
          netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="rsvp" />
          <p style={{ display: "none" }}>
            <label>
              Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
          </p>
          <Fieldset>
            <Legend>Details</Legend>
            <TextInput
              name="fname"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            >
              First Name:
            </TextInput>
            <TextInput
              name="lname"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            >
              Last Name:
            </TextInput>
            <EmailInput
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            >
              Email:
            </EmailInput>
            <StyledSeparator />
            <RadioGroup
              labelText="Will you be attending the wedding?"
              onChange={(e) => setAttending(e.target.value === "true")}
            >
              <RadioInput name="attending" value="true">
                Yes
              </RadioInput>
              <RadioInput name="attending" value="false">
                No
              </RadioInput>
            </RadioGroup>
            {attending && (
              <>
                <StyledSeparator />
                <RadioGroup labelText="Do you require a vegetarian meal option?">
                  <RadioInput name="dietaryRequirements" value="true">
                    Yes
                  </RadioInput>
                  <RadioInput name="dietaryRequirements" value="false">
                    No
                  </RadioInput>
                </RadioGroup>
                <StyledSeparator />
                <RadioGroup labelText="Are you over the age of 12?">
                  <RadioInput name="olderThanTwelve" value="true">
                    Yes
                  </RadioInput>
                  <RadioInput name="olderThanTwelve" value="false">
                    No
                  </RadioInput>
                </RadioGroup>
              </>
            )}
            <StyledSeparator />
            <ButtonGroup>
              <SubmitButton disabled={isSubmitting}>
                Submit Details
              </SubmitButton>
            </ButtonGroup>
          </Fieldset>
        </Form>
      </StyledSection>
    </Container>
  );
};

const useForm = (formRef) => {
  const [firstName, setFirstName] = useState();
  const [firstNameError, setFirstNameError] = useState();

  const [lastName, setLastName] = useState();
  const [lastNameError, setLastNameError] = useState();

  const [email, setEmail] = useState();
  const [emailError, setEmailError] = useState();

  const [attending, setAttending] = useState(null);
  const [attendingError, setAttendingError] = useState();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      setIsSubmitting(true);

      let isValid = true;

      if (!firstName || firstName.trim().length === 0) {
        setFirstNameError("Please complete this field");
        isValid = false;
      }

      if (!lastName || lastName.trim().length === 0) {
        setLastNameError("Please complete this field");
        isValid = false;
      }

      if (!email || email.trim().length === 0) {
        setEmailError("Please complete this field");
        isValid = false;
      }

      if (attending == null) {
        setAttendingError("Please complete this field");
        isValid = false;
      }

      if (!isValid) return;

      (async () => {
        const formData = new FormData(formRef.current);

        try {
          await fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString(),
          });
        } finally {
          //setIsSubmitting(false);
        }
      })();
    },
    [firstName, lastName, email, attending]
  );

  return {
    handleSubmit,
    isSubmitting,
    firstName,
    firstNameError,
    setFirstName,
    lastName,
    lastNameError,
    setLastName,
    email,
    emailError,
    setEmail,
    attending,
    attendingError,
    setAttending,
  };
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  //background: ${({ theme }) => theme.colors.darkSecondaryHighlight};
  background-image: linear-gradient(to bottom right, ${({ theme }) => theme.colors.lightSecondaryHighlight}, ${({ theme }) => theme.colors.lightPrimaryHighlight});
  padding: ${({ theme }) => theme.margin.extraExtraLarge}
    ${({ theme }) => theme.margin.medium};
`;

const StyledSection = styled(Section)`
  background: ${({ theme }) => theme.colors.contentBackground};
  border: 1px solid ${({ theme }) => theme.colors.lightBorder};
`;

const StyledSeparator = styled(Separator)`
  margin-block: ${({ theme }) => theme.margin.medium};
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  padding-block-start: ${({ theme }) => theme.margin.medium};
  padding-block-end: ${({ theme }) => theme.margin.small};
`;
