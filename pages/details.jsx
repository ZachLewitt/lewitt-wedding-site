import Link from "next/link";
import { FaMailBulk, FaHotel, FaList } from "react-icons/fa";
import { Text } from "@components/text";
import { PageWrapper } from "@components/page-wrapper";
import { TextSection } from "@components/section";
import {
  CardContainer,
  Card,
  CardImage,
  CardList,
  CardListItem,
} from "@components/cards";
import {
  DescriptionDefinition,
  DescriptionTerm,
  DescriptionList,
} from "@components/description-list";
import { Separator } from "@components/separator";
import image from "../public/details.jpg";
import lindosBay from "../public/lindos-bay.jpg";
import beachHoliday from "../public/beach-holiday.jpg";
import styled from "styled-components";

export default function Details() {
  return (
    <PageWrapper
      heading="Lewitt Wedding"
      image={image}
      imageAlt="Zach and Kirsty holding hands"
    >
      <Welcome />
      <Wedding />
      <Holiday />
      <MoreInfo />
    </PageWrapper>
  );
}

const Welcome = () => (
  <>
    <TextSection title="Welcome">
      <Text>
        In September 2021 Zach popped the question on holiday in Rhodes. We both
        really loved the island and thought what better place to celebrate the
        big day.
      </Text>
      <Text>
        As our family and friends we would really love for you to join us in the
        celebration.
      </Text>
    </TextSection>
    <CardContainer>
      <Card fade left>
        <DescriptionList>
          <DescriptionTerm>Location:</DescriptionTerm>
          <Separator />
          <DescriptionDefinition>Lindos, Rhodes, Greece</DescriptionDefinition>
          <DescriptionTerm>Date:</DescriptionTerm>
          <Separator />
          <DescriptionDefinition>1st August 2023</DescriptionDefinition>
          <DescriptionTerm>Dress Code:</DescriptionTerm>
          <Separator />
          <DescriptionDefinition>Smart Casual</DescriptionDefinition>
        </DescriptionList>
      </Card>
    </CardContainer>
  </>
);

const Wedding = () => (
  <>
    <TextSection title="The Wedding">
      <Text>Our wedding day will be in Lindos, Rhodes on 1st August 2023.</Text>
      <Text>
        The ceremony is taking place at St Pauls, a beautiful wedding chapel
        overlooking the bay.
      </Text>
      <Text>
        We will be arranging transportation for guests to the chapel. Please let
        us know where you'll be staying so that we can ensure you are picked up.
      </Text>
      <Text>
        We are expecting the temperature to be a little bit hotter than a usual
        british wedding so make sure to prioritise comfort in the outfit you
        choose to wear. Ladies, please be aware our reception venue is located
        on the beach so please be careful when choosing your heel type.
      </Text>
      <Text>
        The ceremony will be followed by a champagne cruise to the reception
        venue, Skala Beach Restaurant. It's here we will spend the rest of the
        evening.
      </Text>
    </TextSection>
    <CardContainer>
      <CardImage
        src={lindosBay}
        alt="Lindos Bay"
        layout="responsive"
        width={700}
        height={524}
        placeholder="blur"
        fade
        right
      />
    </CardContainer>
  </>
);

const Holiday = () => (
  <>
    <TextSection title="Holiday">
      <Text>
        We are planning to make a weeks holiday out of the event. We will be
        staying in a lovely town called Pefkos which is just a 10 minute drive
        from Lindos.
      </Text>
      <Text>
        Both Lindos and Pefkos are beautiful towns in Rhodes with plenty to do
        alongside many bars, restaurants, activities and beaches at both. Both
        cater for families and adults depending on how you see you time spent in
        Rhodes.
      </Text>
      <Text>
        If you are also planning on making a holiday out of the trip then let us
        know and we can arrange some meet ups.
      </Text>
    </TextSection>
    <CardContainer>
      <CardImage
        src={beachHoliday}
        alt="Deck chairs by the beach"
        layout="responsive"
        width={700}
        height={466}
        placeholder="blur"
        fade
        left
      />
    </CardContainer>
  </>
);

const MoreInfo = () => (
  <>
    <TextSection title="See you there?">
      <Text>
        We hope you can join us for our big day but if the travel is too far
        then we would love to celebrate when we are back in the UK. If you are
        planning on coming then thats great!
      </Text>
      <Text>
        Let us know either way if you can make it or not by filling out our{" "}
        <Link href="/rsvp">RSVP form</Link>.
      </Text>
      <Text>See the links below for more info about the wedding.</Text>
    </TextSection>
    <CardList>
      <StyledCardListItem fade right>
        <FaMailBulk size="1.9rem" />
        <Link href="/rsvp" passHref>
          <StyledLink>RSVP</StyledLink>
        </Link>
      </StyledCardListItem>
      <StyledCardListItem fade right>
        <FaList size="1.9rem" />
        <Link href="/itinerary" passHref>
          <StyledLink>Itinerary</StyledLink>
        </Link>
      </StyledCardListItem>
      <StyledCardListItem fade right>
        <FaHotel size="1.9rem" />
        <Link href="/accommodation" passHref>
          <StyledLink>Accommodation</StyledLink>
        </Link>
      </StyledCardListItem>
    </CardList>
  </>
);

const StyledCardListItem = styled(CardListItem)`
  display: flex;
  align-items: center;
  position: relative;
`;

const StyledLink = styled.a`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  font-family: ${({ theme }) => theme.font.content};
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: bold;

  text-decoration: none;
  color: ${({ theme }) => theme.colors.contentForeground};
`;
