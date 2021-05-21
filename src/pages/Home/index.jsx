import background from "../../assets/images/background.png";
import Button from "../../components/Button";
import { useHistory } from "react-router";
import { Conteiner, Content } from "./styles";
const Home = () => {
  const history = useHistory();

  const sendTo = (path) => {
    return history.push(path);
  };
  return (
    <Conteiner>
      <div>
        <img src={background} alt="imagem de fundo" />
      </div>
      <Content>
        <div>
          <h2>Bem vindo(a) ao KenzieHub!</h2>
        </div>
        <div>
          <Button handleClick={() => sendTo("/register")}>Cadastrar</Button>
          <Button handleClick={() => sendTo("/login")}>Entrar</Button>
        </div>
      </Content>
    </Conteiner>
  );
};
export default Home;
