import styled from "styled-components";
import { hexToRgb } from "../../utils/hexToRgb";
import { StateColors } from "../../utils/constants/StateColors";
import { PomodoroStages } from "../../utils/constants/PomodoroStages";

interface ContainerProps {
  $type: PomodoroStages;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;

  padding: 4.5px 8px;
  border-radius: 4px;
  white-space: nowrap;

  width: fit-content;

  ${({ $type }) => {
    // Get the background color, color and border color based on the badge type
    const backgroundColor = hexToRgb(StateColors[$type], 0.1);
    const color = StateColors[$type];
    const border = `1px solid ${StateColors[$type]}`;

    return `
        background-color: ${backgroundColor};
        color: ${color};
        border: ${border};
      `;
  }}

  > svg {
    margin-right: 8px;
    font-size: 1.5rem;
  }

  > span {
    font-size: 1rem;
    font-weight: 600;
    user-select: none;
  }
`;

export default Container;
