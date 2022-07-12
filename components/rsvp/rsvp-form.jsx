import { useCallback, useRef, useState } from "react";
import styled from "styled-components";
import Router from "next/router";
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
    setFirstNameError,
    lastName,
    lastNameError,
    setLastName,
    setLastNameError,
    email,
    emailError,
    setEmail,
    setEmailError,
    attending,
    attendingError,
    setAttending,
    setAttendingError,
    mealChoice,
    mealChoiceError,
    setMealChoice,
    setMealChoiceError,
    age,
    ageError,
    setAge,
    setAgeError,
  } = useForm(formRef);

  return (
    <Container>
      <StyledSection id="rsvpFormSection">
        <Form
          id="rsvpForm"
          ref={formRef}
          onSubmit={handleSubmit}
          name="rsvpForm"
          data-netlify="true"
          netlify-honeypot="bot-field"
          noValidate
        >
          <input type="hidden" name="form-name" value="rsvpForm" />
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
              onBlur={(e) => validateField(e.target, setFirstNameError)}
              error={firstNameError}
            >
              First Name:
            </TextInput>
            <TextInput
              name="lname"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              onBlur={(e) => validateField(e.target, setLastNameError)}
              error={lastNameError}
            >
              Last Name:
            </TextInput>
            <EmailInput
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={(e) => validateField(e.target, setEmailError)}
              error={emailError}
            >
              Email Address:
            </EmailInput>
            <StyledSeparator />
            <RadioGroup
              labelText="Will you be attending the wedding?"
              onChange={(e) => setAttending(e.target.value === "true")}
              onBlur={(e) => validateField(e.target, setAttendingError)}
              onClick={(e) => validateField(e.target, setAttendingError)}
              error={attendingError}
            >
              <RadioInput name="attending" value="true" required>
                Yes
              </RadioInput>
              <RadioInput name="attending" value="false" required>
                No
              </RadioInput>
            </RadioGroup>
            {attending && (
              <>
                <StyledSeparator />
                <RadioGroup
                  labelText="Do you require a vegetarian meal option?"
                  onChange={(e) => setMealChoice(e.target.value === "true")}
                  onBlur={(e) => validateField(e.target, setMealChoiceError)}
                  onClick={(e) => validateField(e.target, setMealChoiceError)}
                  error={mealChoiceError}
                >
                  <RadioInput name="mealChoice" value="true" required>
                    Yes
                  </RadioInput>
                  <RadioInput name="mealChoice" value="false" required>
                    No
                  </RadioInput>
                </RadioGroup>
                <StyledSeparator />
                <RadioGroup
                  labelText="Are you over the age of 12?"
                  onChange={(e) => setAge(e.target.value === "true")}
                  onBlur={(e) => validateField(e.target, setAgeError)}
                  onClick={(e) => validateField(e.target, setAgeError)}
                  error={ageError}
                >
                  <RadioInput name="olderThanTwelve" value="true" required>
                    Yes
                  </RadioInput>
                  <RadioInput name="olderThanTwelve" value="false" required>
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
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState();

  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState();

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState();

  const [attending, setAttending] = useState(null);
  const [attendingError, setAttendingError] = useState();

  const [mealChoice, setMealChoice] = useState(null);
  const [mealChoiceError, setMealChoiceError] = useState();

  const [age, setAge] = useState(null);
  const [ageError, setAgeError] = useState();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      setIsSubmitting(true);

      const form = formRef.current;

      const isValid = form.checkValidity();

      if (!isValid) {
        const firstNameField = form.querySelector("input[name='fname']");
        validateField(firstNameField, setFirstNameError);

        const lastNameField = form.querySelector("input[name='lname']");
        validateField(lastNameField, setLastNameError);

        const emailField = form.querySelector("input[name='email']");
        validateField(emailField, setEmailError);

        const attendingField = form.querySelector("input[name='attending']");
        validateField(attendingField, setAttendingError);

        if (attending) {
          const mealChoiceField = form.querySelector(
            "input[name='mealChoice']"
          );
          validateField(mealChoiceField, setMealChoiceError);

          const ageField = form.querySelector("input[name='olderThanTwelve']");
          validateField(ageField, setAgeError);
        }

        setIsSubmitting(false);

        return;
      }

      (async () => {
        const formData = new FormData(formRef.current);
        const body = new URLSearchParams(formData).toString();
        console.log(body);

        try {
          const response = await fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body,
          });

          if (response.status === 200) {
            Router.push("/confirmation");
          }
        } finally {
          //setIsSubmitting(false);
        }
      })();
    },
    [firstName, lastName, email, attending, mealChoice, age, formRef]
  );

  return {
    handleSubmit,
    isSubmitting,
    firstName,
    firstNameError,
    setFirstName,
    setFirstNameError,
    lastName,
    lastNameError,
    setLastName,
    setLastNameError,
    email,
    emailError,
    setEmail,
    setEmailError,
    attending,
    attendingError,
    setAttending,
    setAttendingError,
    mealChoice,
    mealChoiceError,
    setMealChoice,
    setMealChoiceError,
    age,
    ageError,
    setAge,
    setAgeError,
  };
};

const validateField = (field, setError) => {
  if (!field.checkValidity()) {
    const message = field.validationMessage;
    setError(message);
  } else {
    setError(null);
  }
};

const Container = styled.div`
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
