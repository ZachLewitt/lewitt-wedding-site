import styled from "styled-components";

export const Map = ({ src, ...other }) => {
  return (
    <StyledFrame
      src={src}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      {...other}
    />
  );
};

const StyledFrame = styled.iframe`
  border: none;
  width: 100%;
  max-width: 700px;
  height: 500px;
  margin-block: ${({ theme }) => theme.margin.medium};

  @media only screen and (max-width: 600px) {
    height: 300px;
  }
`;
