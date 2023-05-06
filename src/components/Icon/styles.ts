import styled from "styled-components";

interface ContainerProps {
  $clickable?: boolean;
}

export const Container = styled.button<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: ${({ $clickable }) => ($clickable ? "pointer" : "default")};
  color: ${({ theme }) => theme.text.secondary};
  background-color: ${({ theme }) => theme.colors.checkbox.background};

  appearance: none;
  border-radius: 4px;
  border: none;

  padding: 8px;

  transition: 0.2s;

  min-height: 32px;
  min-width: 32px;

  > svg {
    font-size: 1.15rem;
  }

  ${({ $clickable, theme }) =>
    $clickable &&
    `
      &:hover {
        color: ${theme.text.primary};
        filter: brightness(0.9);
      }
    `}
`;
