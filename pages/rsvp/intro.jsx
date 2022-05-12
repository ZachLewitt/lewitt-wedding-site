import { Section } from "@components/section";
import { SectionHeading } from "@components/section-heading";
import { Text } from "@components/text"; 

export const Intro = () => {
  return (
    <Section>
      <SectionHeading>RSVP</SectionHeading>
      <Text>
        We welcome you to come and join us in Lindos on the 01 August 2023.
      </Text>
      <Text>
        We appreciate it is a long way for people to travel, especially with
        work and other commitments. If you cannot make it then we would still
        like to celebrate with you in the UK after the wedding.
      </Text>
      <Text>
        If you do plan on attending then we look forward to celebrating with
        you!
      </Text>
      <Text>
        Below is our RSVP form if you could take the time to submit your
        details, even if you are not attending, then it would be greatly
        appreciated.
      </Text>
    </Section>
  );
};
