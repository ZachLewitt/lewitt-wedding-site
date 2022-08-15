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
import { Separator } from "@components/separator";
import { SubmitButton } from "@components/buttons";
import { Card, CardContainer } from "@components/cards";

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
    isAttending,
    isAttendingError,
    setIsAttending,
    setIsAttendingError,
    isVegetarianError,
    setIsVegetarian,
    setIsVegetarianError,
    isOlderThanTwelveError,
    setIsOlderThanTwelve,
    setIsOlderThanTwelveError,
  } = useForm(formRef);

  return (
    <CardContainer>
      <Card id="rsvpFormSection">
        <Form
          id="rsvpForm"
          ref={formRef}
          onSubmit={handleSubmit}
          name="rsvp"
          data-netlify="true"
          netlify-honeypot="bot-field"
          noValidate
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
              onChange={(e) => setIsAttending(e.target.value === "true")}
              onBlur={(e) => validateCheckbox(e.target, setIsAttendingError)}
              onClick={(e) => validateCheckbox(e.target, setIsAttendingError)}
              error={isAttendingError}
            >
              <RadioInput name="isAttending" value="true" required>
                Yes
              </RadioInput>
              <RadioInput name="isAttending" value="false" required>
                No
              </RadioInput>
            </RadioGroup>
            <ToggleFieldContainer isVisible={isAttending}>
              <StyledSeparator />
              <RadioGroup
                labelText="Are you vegetarian?"
                onChange={(e) => setIsVegetarian(e.target.value === "true")}
                onBlur={(e) => validateCheckbox(e.target, setIsVegetarianError)}
                onClick={(e) =>
                  validateCheckbox(e.target, setIsVegetarianError)
                }
                error={isVegetarianError}
              >
                <RadioInput name="isVegetarian" value="true" required>
                  Yes
                </RadioInput>
                <RadioInput name="isVegetarian" value="false" required>
                  No
                </RadioInput>
              </RadioGroup>
              <StyledSeparator />
              <RadioGroup
                labelText="Are you over the age of 12?"
                onChange={(e) =>
                  setIsOlderThanTwelve(e.target.value === "true")
                }
                onBlur={(e) =>
                  validateCheckbox(e.target, setIsOlderThanTwelveError)
                }
                onClick={(e) =>
                  validateCheckbox(e.target, setIsOlderThanTwelveError)
                }
                error={isOlderThanTwelveError}
              >
                <RadioInput name="isOlderThanTwelve" value="true" required>
                  Yes
                </RadioInput>
                <RadioInput name="isOlderThanTwelve" value="false" required>
                  No
                </RadioInput>
              </RadioGroup>
            </ToggleFieldContainer>
            <StyledSeparator />
            <ButtonGroup>
              <SubmitButton disabled={isSubmitting}>
                Submit Details
              </SubmitButton>
            </ButtonGroup>
          </Fieldset>
        </Form>
      </Card>
    </CardContainer>
  );
};

const useForm = (formRef) => {
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState();

  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState();

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState();

  const [isAttending, setIsAttending] = useState(null);
  const [isAttendingError, setIsAttendingError] = useState();

  const [isVegetarian, setIsVegetarian] = useState(null);
  const [isVegetarianError, setIsVegetarianError] = useState();

  const [isOlderThanTwelve, setIsOlderThanTwelve] = useState(null);
  const [isOlderThanTwelveError, setIsOlderThanTwelveError] = useState();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      setIsSubmitting(true);

      const form = formRef.current;

      form.checkValidity();

      const firstNameField = form.querySelector("input[name='fname']");
      let isValid = validateField(firstNameField, setFirstNameError);

      const lastNameField = form.querySelector("input[name='lname']");
      isValid = isValid & validateField(lastNameField, setLastNameError);

      const emailField = form.querySelector("input[name='email']");
      isValid = isValid & validateField(emailField, setEmailError);

      const isAttendingField = form.querySelector("input[name='isAttending']");
      isValid = isValid & validateField(isAttendingField, setIsAttendingError);

      if (isAttending) {
        const isVegetarianField = form.querySelector(
          "input[name='isVegetarian']"
        );
        isValid =
          isValid & validateField(isVegetarianField, setIsVegetarianError);

        const isOlderThanTwelveField = form.querySelector(
          "input[name='isOlderThanTwelve']"
        );
        isValid =
          isValid &
          validateField(isOlderThanTwelveField, setIsOlderThanTwelveError);
      }

      if (!isValid) {
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
            if (isAttending) {
              Router.push("/confirmation-attending");
            } else {
              Router.push("/confirmation-absent");
            }
          }
        } finally {
          //setIsSubmitting(false);
        }
      })();
    },
    [
      firstName,
      lastName,
      email,
      isAttending,
      isVegetarian,
      isOlderThanTwelve,
      formRef,
    ]
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
    isAttending,
    isAttendingError,
    setIsAttending,
    setIsAttendingError,
    isVegetarian,
    isVegetarianError,
    setIsVegetarian,
    setIsVegetarianError,
    isOlderThanTwelve,
    isOlderThanTwelveError,
    setIsOlderThanTwelve,
    setIsOlderThanTwelveError,
  };
};

const validateField = (field, setError) => {
  const isValid = field.checkValidity();

  if (!isValid) {
    const message = field.validationMessage;
    setError(message);
  } else {
    setError(null);
  }

  return isValid;
};

const validateCheckbox = (field, setError) => {
  if (field.type !== "radio") return;

  const isValid = field.checkValidity();

  if (!isValid) {
    const message = field.validationMessage;
    setError(message);
  } else {
    setError(null);
  }

  return isValid;
};

const StyledSeparator = styled(Separator)`
  margin-block: ${({ theme }) => theme.margin.medium};
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  padding-block-start: ${({ theme }) => theme.margin.medium};
  padding-block-end: ${({ theme }) => theme.margin.small};
`;

const ToggleFieldContainer = styled.div`
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};

  flex-direction: column;
`;
