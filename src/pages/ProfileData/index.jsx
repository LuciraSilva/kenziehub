import { useHistory } from "react-router";
import Button from "../../components/Button";

const ProfileData = () => {
  const history = useHistory();
  const { name, email, course_module, techs, id } = history.location.state;
  const sendToAddTech = () => {
    return history.push("/addTech", id);
  };
  return (
    <div>
      <h3>Nome: {name}</h3>
      <p>Email: {email}</p>
      
      <ul>Tecnologias: {techs && techs.map((tech) => <li key={tech.id}>{tech.title}: {tech.status} </li>)}</ul>
      <p>Módulo: {course_module}</p>

      <Button handleClick={sendToAddTech}>Adicionar tecnologia</Button>
    </div>
  );
};

export default ProfileData;
