import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../Button";
const Form = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    emailConfirm: yup
      .string()
      .oneOf([yup.ref("email")], "Email incorreto")
      .required("Campo obrigatório"),
    contact: yup.string().required("Campo obrigatório"),
    bio: yup.string().max(200, "Limite de caracteres excedido"),
    course_module: yup.string().required("Selecione uma opção"),
    password: yup
      .string()
      .min(6, "Senha mínima de 6 dígitos")
      .required("Campo obrigatório")
      .matches(
        "(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])",
        "A senha deve contar ao menos uma letra maiúscula, uma minúscula, um caractere especial e ao menos um dígito"
      ),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senha incorreta")
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

  const handleOnSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <form onSubmit={handleSubmit(handleOnSubmit)}>
      <label htmlFor="">Nome</label>
      <input id="name" type="text" placeholder="Nome" {...register("name")} />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        placeholder="Email"
        {...register("email")}
      />
      {errors.email?.message && <span>{errors.email.message}</span>}

      <label htmlFor="emailConfirm">Confirmação de email</label>
      <input
        id="emailConfirm"
        type="email"
        placeholder="Confirmação de email"
        {...register("emailConfirm")}
      />
      {errors.email?.message && <span>{errors.email.message}</span>}

      <label htmlFor="contact">Contato</label>
      <input
        id="contact"
        type="text"
        placeholder="Contato"
        {...register("contact")}
      />
      {errors.contact?.message && <span>{errors.contact.message}</span>}

      <label htmlFor="bio">Biografia</label>
      <input
        id="bio"
        type="text"
        placeholder="Biografia"
        {...register("bio")}
      />
      {errors.bio?.message && <span>{errors.bio.message}</span>}

      <label htmlFor="course_module">Módulos</label>
      <select
        id="course_module"
        {...register("course_module")}
        errors={errors.course_module?.message}
      >
        <option value="Primeiro módulo (Introdução ao Frontend)">
          Primeiro módulo (Introdução ao Frontend)
        </option>
        <option value="Segundo módulo (Frontend Avançado)">
          Segundo módulo (Frontend Avançado)
        </option>
        <option value="Terceiro módulo (Introdução ao Backend)">
          Terceiro módulo (Introdução ao Backend)
        </option>
        <option value="Quarto módulo (Backend Avançado)">
          Quarto módulo (Backend Avançado)
        </option>
      </select>
      {errors.course_module?.message && (
        <span>{errors.course_module.message}</span>
      )}

      <label htmlFor="password">Senha</label>
      <input
        id="password"
        type="password"
        placeholder="Senha"
        {...register("password")}
      />
      {errors.password?.message && <span>{errors.password.message}</span>}

      <label htmlFor="passwordConfirm">Confirmação de senha</label>
      <input
        id="passwordConfirm"
        type="password"
        placeholder="Confirmação de senha"
        {...register("passwordConfirm")}
        errors={errors.passwordConfirm?.message}
      />
      {errors.passwordConfirm?.message && (
        <span>{errors.passwordConfirm.message}</span>
      )}

      <Button type="submit">Enviar</Button>
    </form>
  );
};
export default Form;
