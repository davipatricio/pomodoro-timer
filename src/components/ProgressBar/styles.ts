import styled from "styled-components";
import { StateColors } from "../../utils/constants/StateColors";
import { BadgeProps } from "../Badge";

interface ProgressProps {
  progress: number;
  $type: BadgeProps["type"];
}

export const Container = styled.div<ProgressProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  background: radial-gradient(
      closest-side,
      ${({ theme }) => theme.background} 89%,
      transparent 90% 100%
    ),
    conic-gradient(
      ${({ $type, progress }) => `${StateColors[$type]} ${progress}%`},
      ${({ theme }) => theme.colors.darkBorder} 0
    );

  position: relative;

  margin: auto;
  margin-top: 80px;

  height: 224px;
  width: 224px;

  &:hover {
    > div.actions {
      visibility: visible;
      opacity: 1;
    }
  }

  > div.actions {
    position: absolute;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    visibility: hidden;
    opacity: 0;

    border-radius: 50%;
    backdrop-filter: blur(5px);
    transition: 0.5s;

    height: 250px;
    width: 250px;

    > button {
      color: ${({ theme }) => theme.text.primary};
      background-color: ${({ theme }) => theme.colors.checkbox.border};

      height: 50px;
      width: 50px;

      &:hover {
        background-color: ${({ theme }) => theme.colors.lime};
        scale: 1.07;
      }

      > svg {
        font-size: 2.5rem;
      }

      /* Pause/resume button */
      &:nth-child(2) {
        scale: 1.1;
        &:hover {
          scale: 1.15;
        }
      }
    }
  }

  > progress {
    visibility: hidden;
    height: 0;
    width: 0;
  }

  > span {
    font-size: 4rem;
    font-family: Rajdhani, sans-serif;
  }
`;
