import styled from "styled-components";
import image from "../public/itinerary.jpg";
import { PageWrapper } from "@components/page-wrapper";
import { Text } from "@components/text";

export default function Itinerary() {
  return (
    <PageWrapper heading="Itinerary" image={image}>
      <ItineraryContainer>
        <DayContainer>
          <DayHeader>
            <DayHeaderContent>
              <Date>1st August</Date>
              <DayHeading>The Wedding</DayHeading>
            </DayHeaderContent>
          </DayHeader>
          <EventList>
            <Event>
              <Time bold>2:30pm</Time>
              <StyledText>Pick up</StyledText>
            </Event>
            <Event>
              <Time bold>3:00pm</Time>
              <StyledText>Welcome drinks</StyledText>
            </Event>
            <Event>
              <Time bold>3:45pm</Time>
              <StyledText>Take your seats at St Paul's Chapel</StyledText>
            </Event>
            <Event>
              <Time bold>4:00pm</Time>
              <StyledText>Ceremony</StyledText>
            </Event>
            <Event>
              <Time bold>5:30pm</Time>
              <StyledText>Champagne Cruise</StyledText>
            </Event>
            <Event>
              <Time bold>7:00pm</Time>
              <StyledText>Dinner at Skala Beach</StyledText>
            </Event>
            <Event>
              <Time bold>9:00pm</Time>
              <StyledText>First dance and time to party</StyledText>
            </Event>
            <Event>
              <Time bold>12:00am</Time>
              <StyledText>End of the day</StyledText>
            </Event>
          </EventList>
        </DayContainer>
      </ItineraryContainer>
    </PageWrapper>
  );
}

const ItineraryContainer = styled.div`
  width: 100%;
`;

const DayContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const DayHeader = styled.div`
  display: flex;

  width: 100%;
  height: 450px;
  border: 10px solid ${({ theme }) => theme.colors.darkSecondaryHighlight};

  background-image: url("/st-pauls.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media only screen and (max-width: 600px) {
    height: 250px;
  }
`;

const DayHeaderContent = styled.div`
  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.4);
  color: ${({ theme }) => theme.colors.primaryForeground};

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DayHeading = styled.h2`
  font-family: ${({ theme }) => theme.font.title};
  font-size: 3rem;
  flex-grow: 1;
  margin-top: 75px;

  @media only screen and (max-width: 600px) {
    font-size: 2rem;
    margin-top: 18px;
  }
`;

const Date = styled.p`
  font-family: ${({ theme }) => theme.font.content};
  font-size: 2.5rem;
  align-self: start;
  margin: ${({ theme }) => theme.margin.extraLarge};

  @media only screen and (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const EventList = styled.ul`
  border: 10px solid ${({ theme }) => theme.colors.darkSecondaryHighlight};;
  border-top: none;
  margin: 0px;
  padding: ${({ theme }) => theme.margin.extraExtraLarge} 0px;
  background: ${({ theme }) => theme.colors.lightSecondaryHighlight};
  display: flex;
  flex-direction: column;
  grid-gap: ${({ theme }) => theme.margin.extraExtraLarge};
`;

const Event = styled.li`
  display: flex;
  flex-direction: column;
  position: relative;

  border-top: 7px solid ${({ theme }) => theme.colors.darkSecondaryHighlight};
  border-bottom: 7px solid ${({ theme }) => theme.colors.darkSecondaryHighlight};
  margin: 0px;
  padding: ${({ theme }) => theme.margin.medium};
  padding-inline-start: ${({ theme }) => theme.margin.large};
  grid-gap: ${({ theme }) => theme.margin.medium};

  background: ${({ theme }) => theme.colors.contentBackground};
  list-style: none;

  &::before {
    box-sizing: border-box;
    display: block;
    content: " ";
    position: absolute;
    top: 50%;
    left: -19px;
    height: 28px;
    width: 28px;
    margin-top: -18px;
    background: ${({ theme }) => theme.colors.contentBackground};
    border: 7px solid ${({ theme }) => theme.colors.darkSecondaryHighlight};
    border-radius: 50%;
  }
`;

const StyledText = styled(Text)`
  margin: 0px;
`;

const Time = styled(Text)`
  border-bottom: 2px solid ${({ theme }) => theme.colors.lightBorder};
  margin: 0px;
`;
