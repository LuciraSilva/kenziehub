import { useEffect, useState } from "react";
import Button from "../../components/Button";
import api from "../../services";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { Container, Content } from "./styles";

const AddTech = ({ isAuthorized }) => {
  const history = useHistory();
  const userId = history.location.state;

  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("iniciante");

  const [people, setPeople] = useState([]);

  const [wannaAdd, setWannaAdd] = useState(true);

  const [token] = useState(
    JSON.parse(localStorage.getItem("@Kenziehub:token")) || ""
  );

  const getTech = () => {
    if (isAuthorized) {
      api
        .get(`/users?perPage=15&page=1&tech=${title}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => setPeople(response.data));
    }
  };
  const handleUpdateTech = () => {
    const hasTech = people.find((pessoa) => pessoa.id === userId);
    if (hasTech) {
      const { id } = hasTech.techs.filter(
        (desiredTech) => desiredTech.title === title
      )[0];
      api
        .put(
          `/users/techs/${id}`,
          {
            status,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((_) =>
          toast.success("Tecnologia já existente, atualização de status feita")
        )
        .catch((_) => toast.error("Erro ao atualizar"));
    }
  };
  const handleDeleteTech = () => {
    const hasTech = people.find((pessoa) => pessoa.id === userId);
    if (hasTech) {
      const { id } = hasTech.techs.filter(
        (desiredTech) => desiredTech.title === title
      )[0];
      api
        .delete(`/users/techs/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((_) => toast.success("Tecnologia deletada com sucesso"))
        .catch((_) => toast.error("Erro em deletar tecnologia"));
    }
  };
  useEffect(() => {
    if (people.length !== 0) {
      if (wannaAdd) {
        handleUpdateTech();
      } else {
        handleDeleteTech();
      }
    }
  }, [people]);

  const handlePost = () => {
    api
      .post(
        "/users/techs",
        { title, status },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((_) => toast.success("Tecnologia adicionada com sucesso"))
      .catch((_) => {
        toast.error("Falha ao adicionar tecnologia");
        getTech();
      });
  };
  const handleOnSubmit = () => {
    if (title !== "" && status !== "" && wannaAdd) {
      handlePost();
    } else if (!wannaAdd) {
      getTech();
    }
  };
  const getDatas = () => {
      api.get(`/users/${userId}`).then((response) => history.push("/profiledata", response.data));
  }
  return (
    <Container>
      {wannaAdd ? (
        <Content>
          <label htmlFor="title">Nome</label>
          <input
            id="title"
            type="text"
            placeholder="Tecnologia"
            onChange={(e) => setTitle(e.target.value)}
          />

          <label htmlFor="status">status</label>
          <select onChange={(e) => setStatus(e.target.value)} id="status">
            <option value="iniciante">iniciante</option>
            <option value="intermediário">intermediário</option>
            <option value="avançado">avançado</option>
          </select>

          <Button handleClick={handleOnSubmit}>Adicionar</Button>
          <Button handleClick={getDatas}>Ver perfil</Button>

          <Button handleClick={() => setWannaAdd(false)}>
            Deletar tecnologias
          </Button>
        </Content>
      ) : (
        <Content>
          <label htmlFor="title">Nome</label>
          <input
            id="title"
            type="text"
            placeholder="Tecnologia"
            onChange={(e) => setTitle(e.target.value)}
          />
          <Button handleClick={handleOnSubmit}>Deletar</Button>
          <Button handleClick={getDatas}>Ver perfil</Button>

          <Button handleClick={() => setWannaAdd(true)}>
            Adicionar/atualizar tecnologias
          </Button>
        </Content>
      )}
    </Container>
  );
};
export default AddTech;
