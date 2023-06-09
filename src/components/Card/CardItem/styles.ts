import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 425px) {
    align-items: flex-start;
    justify-content: normal;
    flex-direction: column;
    gap: 5px;
  }

  /* Hide icon on mobile */
  @media (max-width: 495px) {
    > button.icon {
      display: none;
    }
  }

  > section {
    > h1,
    > h2 {
      color: ${({ theme }) => theme.text.secondary};
    }

    > h2 {
      font-size: 1.15rem;
      font-weight: 600;
    }

    > p,
    > span {
      color: ${({ theme }) => theme.text.tertiary};
    }

    > span {
      font-size: 1rem;
      font-weight: 500;
    }
  }
`;
