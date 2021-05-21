import { useHistory } from "react-router";
import Button from "../../components/Button";

const ProfileData = ({ isAuthorized }) => {
  const history = useHistory();
  const { name, email, course_module, techs } = history.location.state;

  const sendToAddTech = () => {
    if (isAuthorized) {
      return history.push("/addTech");
    }
    return history.push("/");
  };
  return (
    <div>
      <h3>Nome: {name}</h3>
      <p>Email: {email}</p>
      <p>Tecnologias: {techs && techs.map((tech) => <span>{tech}</span>)}</p>
      <p>Módulo: {course_module}</p>

      <Button handleClick={sendToAddTech}>Adicionar tecnologia</Button>
    </div>
  );
};

export default ProfileData;
