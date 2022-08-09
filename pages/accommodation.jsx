import image from "../public/details.jpg";
import blueDreamImage from "../public/blue-dream-villas.jpg";
import { Text } from "@components/text";
import { PageWrapper } from "@components/page-wrapper";
import { TextSection } from "@components/section";
import { Map } from "@components/map";
import { AccommodationList } from "@components/accommodation";
import { Card, CardContainer } from "@components/cards";

const accommodations = [
  {
    name: "Blue Dream Luxury Villas",
    image: blueDreamImage,
    link: "https://www.bluedreamvillas.gr/en/content?id=3247",
    description:
      "Luxury villas in Pefkos, that would suit a family or larger group.",
  },
];

export default function Details() {
  return (
    <PageWrapper heading="Accommodation" image={image}>
      <TextSection title="Where To Stay">
        <Text>
          Rhodes is a big island with plenty of places to stay so there will be
          no shortage of hotels.
        </Text>
        <Text>
          Bear in mind that the wedding will be taking place in the village of
          Lindos on the east coast of the island. As the island is relatively
          large it can take some time to travel from one side to the other.
        </Text>
      </TextSection>
      <TextSection title="Pefkos">
        <Text>
          We will be staying in the resort town of Pefkos and recommend it to
          others who are unsure of where to stay. Pefkos is a lively town with
          plenty of bars and restaurants to keep you busy. It is also only 2.5
          miles from Lindos which will make getting to and from the venue on the
          day easy.
        </Text>
      </TextSection>
      <CardContainer>
        <Card fade left>
          <Map src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21699.44984100908!2d28.046061636179942!3d36.0534294470096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14950efa97e28b47%3A0xce5a916bc64dba0e!2sPefki%2C%20Greece!5e0!3m2!1sen!2suk!4v1658248169372!5m2!1sen!2suk" />
        </Card>
      </CardContainer>
      <TextSection title="Recommendations">
        <Text>
          If you're looking for some inspiration on places to stay then below is
          a list of a few hotels that we've picked out close to the wedding
          venue.
        </Text>
      </TextSection>
      <AccommodationList accommodations={accommodations} />
    </PageWrapper>
  );
}
