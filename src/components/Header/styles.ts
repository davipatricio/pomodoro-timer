import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    align-items: flex-start;
    flex-direction: column;
    gap: 10px;
  }

  .name {
    h1 {
      font-size: 2.5rem;
    }

    p {
      color: ${({ theme }) => theme.text.secondary};
      font-size: 1.3rem;
    }
  }

  .icons {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;
