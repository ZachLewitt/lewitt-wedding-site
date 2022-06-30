import image from "../public/itinerary.jpg";
import { Text } from "@components/Text";
import { PageWrapper } from "@components/page-wrapper";

export default function Details() {
  return <PageWrapper heading="Itinerary" image={image}></PageWrapper>;
}
