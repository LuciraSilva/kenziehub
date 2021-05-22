import { useEffect, useState } from "react";
import Button from "../../components/Button";
import api from "../../services";
import { useHistory } from "react-router";
import * as yup from "yup";
import { set, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
const AddTech = ({ isAuthorized }) => {
  const history = useHistory();
  const userId = history.location.state;

  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("iniciante");

  const [people, setPeople] = useState([]);

  const [error, setError] = useState("");

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
      api.put(
        `/users/techs/${id}`,
        {
          status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    }
  };
  useEffect(() => {
    if (people.length !== 0) {
      handleUpdateTech();
    }
  }, [people]);
  const handleOnSubmit = () => {
    if (title !== "" && status !== "") {
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
        .catch((error) => {
          setError(
            "Essa tecnologia já existe no seu perfil, atualize seu status"
          );
          getTech();
        });
    }
  };
  return (
    <div>
      <label htmlFor="name">Nome</label>
      <input
        id="name"
        type="text"
        placeholder="Tecnologia"
        onChange={(e) => setTitle(e.target.value)}
      />

      <label htmlFor="status">status</label>
      <select onChange={(e) => setStatus(e.target.value)} id="status" >
        <option value="iniciante" >iniciante</option>
        <option value="intermediário">intermediário</option>
        <option value="avançado">avançado</option>
      </select>

      <Button handleClick={handleOnSubmit}>
        {!error ? "Adicionar" : "Atualizar status"}
      </Button>
      <Button
        handleClick={() => {
          api
            .get(`/users/${userId}`)
            .then((response) => history.push("/profiledata", response.data));
        }}
      >
        Ver perfil
      </Button>

      {error && <span>{error}</span>}
    </div>
  );
};
export default AddTech;
