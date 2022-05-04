import { SectionHeading } from "@components/section-heading";
import { Section } from "@components/section";
import { Text } from "@components/text";
import { MainImage } from "@components/main-image";

export default function Home() {
  return (
    <>
      <section id="home">
        <MainImage></MainImage>
      </section>
      <Section id="ceremony">
        <SectionHeading>Ceremony</SectionHeading>
        <Text>
          The ceremony will be taking place on the 1st August 2023 in the town
          of Lindos on the Greek island of Rhodes.
        </Text>
      </Section>
      <Section id="accommodation">
        <SectionHeading>Accommodation</SectionHeading>
        <Text>
          The wedding party will be staying in the town of Pefkos, a short 10
          minute drive from Lindos. Guests are very welcome to stay in the
          surrounding areas but it is appreciated that people may have other
          plans.
        </Text>
        <Text>In the Pefkos area the following hotels may be of interest:</Text>

        <Text>Closer to the wedding venue in the town of Lindos:</Text>
      </Section>
    </>
  );
}
