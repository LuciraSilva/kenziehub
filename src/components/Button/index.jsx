import { Container } from "./styles";
const Button = ({ children, handleClick, type = "button", ...rest }) => {
  return <Container onClick={handleClick}>{children}</Container>;
};
export default Button;