import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  border: 1px solid ${({ theme }) => theme.colors.darkBorder};
  border-radius: 12px;

  padding: 1.5rem;

  width: 100%;
  height: 585px;

  @media (max-width: 768px) {
    height: 685px;
  }
`;
