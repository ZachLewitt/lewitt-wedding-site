import { MainImage } from "@components/main-image";
import { Intro, RsvpForm } from "@components/rsvp";

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
