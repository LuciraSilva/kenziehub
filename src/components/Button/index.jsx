import { Conteiner } from "./styles";
const Button = ({ children, handleClick }) => {
  return <Conteiner type="button" onClick={handleClick}>{children}</Conteiner>;
};
export default Button;