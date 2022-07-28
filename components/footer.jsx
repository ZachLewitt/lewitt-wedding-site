import styled from 'styled-components';
import { Text } from './text';

export const Footer = () => {
  return <StyledFooter>
    <Text>Designed by <strong>Lewitt Technologies</strong></Text>
  </StyledFooter>
}

const StyledFooter = styled.footer`
  margin-block-start: 100px;
  height: 80px;
  background: ${({ theme }) => theme.colors.darkPrimaryHighlight};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;