import styled from "styled-components";

export const CheckboxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 5px;
  overflow-y: scroll;

  height: 100%;

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: transparent;
  }

  &:hover {
    ::-webkit-scrollbar {
      width: 5px;
    }

    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.darkBorder};
      border-radius: 15px;
    }
  }

  > p {
    color: ${({ theme }) => theme.text.tertiary};
    margin: auto;
  }

  > label {
    display: flex;
    align-items: center;
    gap: 8px;

    > input {
      appearance: none;

      background-color: ${({ theme }) => theme.colors.checkbox.background};
      border: 1px solid ${({ theme }) => theme.colors.checkbox.border};
      border-radius: 5px;

      height: 20px;
      width: 20px;

      &:checked {
        background-color: ${({ theme }) => theme.colors.lime};
        border: 0;
        text-align: center;

        &::after {
          content: "";
          display: block;
          background: url("/src/assets/checkmark.svg") no-repeat center;
          width: 20px;
          height: 20px;
        }
      }
    }
  }
`;

export const SubmitWrapper = styled.label`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding: 5px;

  height: 40px;

  @media (max-width: 768px) {
    height: 45px;
  }

  > input {
    appearance: none;

    color: ${({ theme }) => theme.text.primary};
    background-color: ${({ theme }) => theme.colors.inputs.background};
    border: none;
    border-radius: 4px;

    font-size: 0.87rem;
    font-weight: 500;

    padding: 8px;

    height: 100%;
    width: 100%;

    @media (max-width: 768px) {
      font-size: 1rem;
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors.inputs.color};
    }
  }

  > button {
    appearance: none;
    border: none;
    border-radius: 4px;

    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.lime};

    color: #fff;
    font-weight: 600;

    padding: 8px 12px;
    line-height: 12px;

    transition: 0.5s;

    @media (max-width: 768px) {
      padding: 8px;
      line-height: initial;
    }

    &:not([disabled]) &:hover {
      filter: brightness(0.9);
    }

    &[disabled] {
      cursor: not-allowed;
      background-color: orangered;
      opacity: 0.5;
    }

    > svg {
      height: 20px;
      width: 20px;
    }
  }
`;
