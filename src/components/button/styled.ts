import styled from "styled-components";

export interface IStyledButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  width?: string;
}

const variants = {
  primary: {
    backgroundColor: "#009edd",
    hoverBackgroundColor: "#0056b3",
  },
  secondary: {
    backgroundColor: "#039B00",
    hoverBackgroundColor: "#005B00",
  },
};

const StyledButton = styled.button<IStyledButtonProps>`
  width: ${($props) => $props.width || "auto"};
  height: 40px;
  background-color: ${(props) =>
    props.variant === "primary"
      ? variants.primary.backgroundColor
      : variants.secondary.backgroundColor};
  color: #fff;
  padding: 8px;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  outline: none;
  transition: all 0.3s;
  &:hover {
    background-color: ${(props) =>
      props.variant === "primary"
        ? variants.primary.hoverBackgroundColor
        : variants.secondary.hoverBackgroundColor};
  }
`;

const ContentButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 12px;
  text-transform: uppercase;
`;
export { StyledButton, ContentButton };
