import image from "../public/details.jpg";
import { Text } from "@components/text";
import { PageWrapper } from "@components/page-wrapper";

export default function Details() {
  return (
    <PageWrapper heading="Welcome" image={image}>
      <Text>
        Rhodes is the place Zach popped the question so we are going back to
        celebrate our big day and would love it if you could join us.
      </Text>
      <Text>
        Our wedding day will be located in Lindos, Rhodes on 1st August 2022.
      </Text>
      <Text>
        We are making a holiday out of it with with some of the wedding party
        joining us to stay in a lovely town town called Pefkos which is just a
        10 minute drive from Lindos for a week!
      </Text>
      <Text>
        Both Lindos and Pefkos are beautiful towns in Rhodes with plenty to do
        alongside many bars, restaurants, activities and beaches at both. Both
        cater for families and adults depending on how you see you time spent in
        Rhodes!
      </Text>
      <Text>
        We hope you can join us for our big day but if the travel is too far
        then we would love to celebrate when we are back in the UK. Should you
        wish to celebrate in Rhodes please see the accommodation page with
        recommendations to help organise your trip.
      </Text>
      <Text>
        <strong>
          Please note the wedding is invite only and not open to the general
          public.
        </strong>
      </Text>
    </PageWrapper>
  );
}
