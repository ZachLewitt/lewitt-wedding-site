import { PageWrapper } from "@components/page-wrapper";
import { Intro, RsvpForm } from "@components/rsvp";
import image from "../public/rsvp.jpg";

export default function Rsvp() {
  return (
    <PageWrapper
      heading="RSVP"
      image={image}
      imageAlt="Zach and Kirsty sitting together"
    >
      <Intro />
      <RsvpForm />
    </PageWrapper>
  );
}
