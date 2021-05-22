import { useHistory } from "react-router";
import Button from "../../components/Button";
import { Container, Content } from "./styles";
const ProfileData = () => {
  const history = useHistory();
  const { name, email, course_module, techs, id } = history.location.state;
  const sendToAddTech = () => {
    return history.push("/addTech", id);
  };
  return (
    <Container>
      <h2>Informações do perfil</h2>
      <Content>
        <p><span>Nome:</span> {name}</p>
        <p><span>Email</span>: {email}</p>

        <ul>
          <span>Tecnologias:</span>
          {techs &&
            techs.map((tech) => (
              <li key={tech.id}>
                {tech.title}: {tech.status}
              </li>
            ))}
        </ul>
        <p><span>Módulo</span>: {course_module}</p>

        <Button handleClick={sendToAddTech}>Adicionar tecnologia</Button>
      </Content>
    </Container>
  );
};

export default ProfileData;
