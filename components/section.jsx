import styled from "styled-components";
import { ContentSubheading } from "./headings";

export const Section = styled.section`
  max-width: 700px;
  width: 100%;
  padding-block: ${({ theme }) => theme.margin.large};

  @media only screen and (max-width: 750px) {
    padding-inline: ${({ theme }) => theme.margin.large};
  }
`;

export const TextSection = ({ title, children, ...other }) => {
  return (
    <Section {...other}>
      <StyledContentSubheading>{title}</StyledContentSubheading>
      {children}
    </Section>
  );
};

const StyledContentSubheading = styled(ContentSubheading)`
  margin-block-end: ${({ theme }) => theme.margin.large};
`