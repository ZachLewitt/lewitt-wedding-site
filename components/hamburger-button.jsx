import styled, { css } from "styled-components";

export const HamburgerButton = ({ isEnabled, onClick, ...other }) => {
  return (
    <Container {...other} onClick={onClick}>
      <Bar1 isEnabled={isEnabled} />
      <Bar2 isEnabled={isEnabled} />
      <Bar3 isEnabled={isEnabled} />
    </Container>
  );
};

const Container = styled.div`
  display: inline-block;
  cursor: pointer;
`;

const Bar = styled.div`
  width: 30px;
  height: 5px;
  background-color: ${({ theme }) => theme.colors.menuForeground};
  margin: 5px 0;
  transition: 0.4s;
  
`;

const Bar1 = styled(Bar)`
  ${({ isEnabled }) =>
    isEnabled &&
    css`
      transform: rotate(-45deg) translate(-7px, 6px);
    `}}
`;

const Bar2 = styled(Bar)`
  ${({ isEnabled }) =>
    isEnabled &&
    css`
      opacity: 0;
    `}}
`;

const Bar3 = styled(Bar)`
  ${({ isEnabled }) =>
    isEnabled &&
    css`
      transform: rotate(45deg) translate(-8px, -8px);
    `}}
`;
