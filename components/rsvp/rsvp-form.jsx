import {
  Fieldset,
  TextInput,
  EmailInput,
  NumberInput,
  Legend,
  Select,
  Form
} from "@components/forms";

export const RsvpForm = () => {
  return (
    <Form>
      <Fieldset>
        <Legend>Details</Legend>
        <TextInput name="fname" required>
          First Name:
        </TextInput>
        <TextInput name="lname" required>
          Last Name:
        </TextInput>
        <NumberInput name="age" required>
          Age:
        </NumberInput>
        <EmailInput name="email" required>
          Email:
        </EmailInput>
        <Select labelText="Attending:" name="attendance" required>
          <option value="attending">Yeah I'll come</option>
          <option value="notAttending">Nah CBA</option>
          <option value="toby">I'm Toby, I'll show up if I feel like it</option>
        </Select>
      </Fieldset>
    </Form>
  );
};
