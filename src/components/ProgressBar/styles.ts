import styled from "styled-components";

interface ProgressProps {
  progress: number;
}

export const Container = styled.div<ProgressProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  background: radial-gradient(
      closest-side,
      ${({ theme }) => theme.background} 79%,
      transparent 80% 100%
    ),
    conic-gradient(
      ${({ theme }) => theme.colors.lime} ${({ progress }) => progress}%,
      ${({ theme }) => theme.colors.darkBorder} 0
    );

  height: 224px;
  width: 224px;

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
