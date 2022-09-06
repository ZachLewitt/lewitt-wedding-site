import Link from "next/link";
import styled from "styled-components";

export const LinkList = styled.ul`
  display: flex;
  flex-direction: column;
  grid-gap: ${({ theme }) => theme.margin.medium};

  margin: 0px;
  margin-block-end: ${({ theme }) => theme.margin.large};
`;

const LinkText = styled.a`
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-family: ${({ theme }) => theme.font.content};
`;

export const LinkItem = ({ href, ...other }) => {
  return (
    <li>
      <Link href={href} passHref>
        <LinkText {...other}></LinkText>
      </Link>
    </li>
  );
};
