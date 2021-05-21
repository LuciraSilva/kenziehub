import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../components/Button";
import api from "../../services";
import { Container } from "./styles";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
const Login = ({ isAuthorized, setIsAuthorized }) => {
  const history = useHistory();
  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Senha mínima de 6 dígitos")
      .required("Campo obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleOnSubmit = (data) => {
    api
      .post("/sessions", data)
      .then((response) => {
        const { token } = response.data;
        localStorage.clear();
        localStorage.setItem("@kenziehub:token", JSON.stringify(token));
        reset();
        setIsAuthorized(true);
        return history.push("/profiledata");
      })
      .catch((err) => toast.error("Email ou senha inválidos"));
  };
  return (
    <Container>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Email"
          {...register("email")}
        />
        {errors.email?.message && <span>{errors.email.message}</span>}

        <label htmlFor="password">Senha</label>
        <input
          id="password"
          type="password"
          placeholder="Senha"
          {...register("password")}
        />
        {errors.password?.message && <span>{errors.password.message}</span>}

        <Button type="submit">Enviar</Button>
      </form>
    </Container>
  );
};
export default Login;
