import Image from 'next/image';
import lindosPic from '../public/lindos.jpg'
import { SectionHeading } from "@components/section-heading";
import { Section } from "@components/section";
import { Text } from "@components/text";

export default function Home() {
  return (
    <>
      <section id="home">
        <p></p>
      </section>
      <Section id="venue">
        <SectionHeading>Ceremony</SectionHeading>
        <Image src={lindosPic} alt="Picture of Lindos" width={700} height={500}></Image>
        <Text>
          The ceremony will be taking place on the 1st August 2023 in the town
          of Lindos on the Greek island of Rhodes.
        </Text>
      </Section>
      <Section id="accommodation">
        <SectionHeading>Where To Stay</SectionHeading>
        <Text>
          The wedding party will be staying in the town of Pefkos, a short 10
          minute drive from Lindos.
        </Text>
      </Section>
    </>
  );
}
