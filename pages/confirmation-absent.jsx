import { Confirmation } from "@components/confirmation";

export default function ConfirmationAbsent() {
  return (
    <Confirmation
      headingText="Thanks For Letting Us Know"
      summaryText="Sorry to hear that you can't make it to the wedding. We'll have to celebrate back in the UK."
      linkText="Confirm Another Person"
    />
  );
}

ConfirmationAbsent.hideFooter = true;