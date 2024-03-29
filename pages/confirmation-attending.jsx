import { Confirmation } from "@components/confirmation";

export default function ConfirmationAttending() {
  return (
    <Confirmation
      headingText="Thanks For Confirming"
      summaryText="We can't wait to see you there on the 1st August 2023!"
      linkText="Confirm Another Person"
    />
  );
}

ConfirmationAttending.hideFooter = true;