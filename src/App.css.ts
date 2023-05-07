import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;

  // #root fills the entire screen
  width: 85%;

  @media (max-width: 1024px) {
    padding: 0 24px;
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-height: 850px) {
    padding: 72px 12px;
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;

    @media (max-width: 968px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 24px;
    }

    @media (max-width: 1024px) {
      gap: 24px;
    }
  }
`;
