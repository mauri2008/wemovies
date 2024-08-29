import { ContentButton, IStyledButtonProps, StyledButton } from "./styled";

interface IButtonProps extends IStyledButtonProps {
  children: React.ReactNode;
  startIcon?: React.ReactNode;
}

export function Button({ children, startIcon, ...props }: IButtonProps) {
  return (
    <StyledButton {...props}>
      <ContentButton>
        {startIcon && startIcon}
        {children}
      </ContentButton>
    </StyledButton>
  );
}
