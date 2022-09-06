import Link from "next/link";
import image from "../public/accommodation.jpg";
import hotelPoolImage from "../public/hotel-pool.jpg";
import { Text } from "@components/text";
import { PageWrapper } from "@components/page-wrapper";
import { TextSection } from "@components/section";
import { Map } from "@components/map";
import { AccommodationList } from "@components/accommodation";
import { Card, CardContainer, CardImage } from "@components/cards";
import { LinkItem, LinkList } from "@components/link-list";

export default function Details() {
  return (
    <PageWrapper
      heading="Accommodation"
      image={image}
      imageAlt="Zach and Kirsty by the sea"
    >
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
        <Text>
          Once you have sorted your accommodation then please let us know where
          you are staying so that we can arrange transportation for the wedding
          day.
        </Text>
      </TextSection>
      <CardContainer>
        <CardImage
          src={hotelPoolImage}
          alt="Swimming pool with sun beds"
          layout="responsive"
          width={700}
          height={466}
          placeholder="blur"
          fade
          left
        />
      </CardContainer>
      <TextSection title="Pefkos">
        <Text>
          We will be staying in the resort town of Pefkos and recommend it to
          others who are unsure of where to stay.
        </Text>
        <Text>
          Pefkos is a lively town with plenty of bars and restaurants to keep
          you busy. It is also only 2.5 miles from Lindos which will make
          getting to and from the venue on the day easy.
        </Text>
      </TextSection>
      <CardContainer>
        <Card fade right>
          <Map src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21699.44984100908!2d28.046061636179942!3d36.0534294470096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14950efa97e28b47%3A0xce5a916bc64dba0e!2sPefki%2C%20Greece!5e0!3m2!1sen!2suk!4v1658248169372!5m2!1sen!2suk" />
        </Card>
      </CardContainer>
      <TextSection title="Recommendations">
        <Text>
          There are plenty of travel agents through which you can book various
          hotel packages deals. For example:
        </Text>
        <LinkList>
          <LinkItem href="https://www.tui.co.uk/">TUI</LinkItem>
          <LinkItem href="https://www.jet2holidays.com/">Jet2Holidays</LinkItem>
          <LinkItem href="https://www.easyjet.com/en/holidays">
            Easy Jet Holidays
          </LinkItem>
          <LinkItem href="https://www.britishairways.com/en-gb/flights-and-holidays/holidays">
            British Airways Holidays
          </LinkItem>
        </LinkList>
        <Text>
          If you fancy a more bespoke holiday and are looking for some
          inspiration then below is a list of a few hotels and villas that we've
          picked out close to where we will be staying in Pefkos.
        </Text>
      </TextSection>
      <AccommodationList />
    </PageWrapper>
  );
}
