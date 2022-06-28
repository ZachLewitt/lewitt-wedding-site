import { MainImage } from "@components/main-image";
import { Intro, RsvpForm } from "@components/rsvp";
import image from "../public/lindos.jpg";

export default function Rsvp() {
  return (
    <>
      <MainImage file={image}>
        <h1>RSVP</h1>
      </MainImage>
      <Intro />
      <RsvpForm />
    </>
  );
}
