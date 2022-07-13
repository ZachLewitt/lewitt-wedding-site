import { Confirmation } from "@components/confirmation";

export default function AbsentConfirmation() {
  return (
    <Confirmation
      headingText="Thanks for letting us know"
      summaryText="Sorry to hear that you can't make it to the wedding. We'll have to celebrate back in the UK."
      linkText="Confirm Another Person"
    />
  );
}
