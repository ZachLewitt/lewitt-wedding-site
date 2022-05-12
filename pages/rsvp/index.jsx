import { MainImage } from "@components/main-image";
import { Section } from "@components/section";
import { Intro } from "./intro";
import { RsvpForm } from "./rsvp-form";

export default function Rsvp() {
  return (
    <>
      <MainImage>
        <h1>RSVP</h1>
      </MainImage>
      <Intro />
      <RsvpForm />
    </>
  );
}
