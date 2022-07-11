import styled from "styled-components";
import { Text } from "@components/text";

export const FieldError = styled(Text)`
  color: ${({ theme }) => theme.colors.error};
`;
