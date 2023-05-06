import styled from "styled-components";

const SmallSpan = styled.span`
  display: block;

  background-color: ${({ theme }) => theme.colors.darkBorder};

  height: 2px;
  width: 100%;
`;

export default function Divider() {
  return <SmallSpan />;
}
