import styled from "styled-components";
import { hexToRgb } from "../../utils/hexToRgb";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => hexToRgb(theme.background, 0.5)};

  height: 100%;
  width: 100%;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  background-color: ${({ theme }) => theme.colors.inputs.background};
  border-radius: 10px;
  padding: 25px;

  height: 50%;
  width: 50%;

  @media (max-width: 768px) {
    width: 90%;
  }

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > button {
      cursor: pointer;
      appearance: none;
      border: none;
      background-color: transparent;
      &:hover {
        opacity: 0.8;
      }

      > svg {
        height: 20px;
        width: 20px;
      }
    }
  }

  > div > label {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > p {
      color: ${({ theme }) => theme.text.secondary};
      font-size: 1.05rem;
    }

    > input {
      width: 15px;
      height: 15px;
    }
  }
`;
