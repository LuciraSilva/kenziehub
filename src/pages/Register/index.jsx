import { useEffect, useState } from "react";
import Form from "../../components/Form";
import api from "../../services";
import { toast } from "react-toastify";
import { useHistory } from "react-router";

const Register = () => {
  const [user, setUser] = useState({});
  const history = useHistory();
  useEffect(() => {
    if (Object.keys(user).length !== 0) {
      api
        .post("/users", user)
        .then((_) => {
          toast.success("Conta criada");
          return history.push("/login");
        })
        .catch((_) => toast.error("Falha ao criar a conta. Tente novamente"));
    }
  }, [user]);
  return <Form setUser={setUser} />;
};
export default Register;
