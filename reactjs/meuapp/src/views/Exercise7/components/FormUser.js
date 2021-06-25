import React from "react";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";
import InputGroup from "../../../components/ui/InputGroup";
import Form from "../../../components/ui/Form";
import { postProduct } from "../../../services/ranekapi";
import { useForm } from "../../../hooks/index";

const FormUser = () => {
  const name = useForm("letter");
  const email = useForm("email");
  const number = useForm("number");
  const district = useForm("letter");
  const city = useForm("letter");
  const state = useForm("letter");

  const fields = [
    {
      ...name,
      placeholder: "Digite o seu nome",
      name: "name",
      label: "Nome",
    },
    {
      ...email,
      placeholder: "Digite o seu e-mail",
      name: "email",
      label: "E-mail",
    },
    {
      placeholder: "Digite a sua senha",
      name: "password",
      label: "Senha",
    },
    {
      placeholder: "Digite a sua rua",
      name: "street",
      label: "Rua",
    },
    {
      ...number,
      placeholder: "Digite o seu número",
      name: "number",
      label: "Número",
    },
    {
      ...district,
      placeholder: "Digite o seu bairro",
      name: "district",
      label: "Bairro",
    },
    {
      ...city,
      placeholder: "Digite a cidade",
      name: "city",
      label: "Cidade",
    },
    {
      ...state,
      placeholder: "Digite o seu estado",
      name: "state",
      label: "Estado",
    },
  ];

  const submit = (data) => {
    try {
      postProduct(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <React.Fragment>
      <Form onSubmit={(data) => submit(data)}>
        {fields.map((field, key) => (
          <InputGroup label={field.label} key={key}>
            <Input
              id={`formUser-field-${key}`}
              placeholder={field.placeholder}
              name={field.name}
              {...field}
            />
          </InputGroup>
        ))}
        <Button type="submit">Enviar</Button>
      </Form>
    </React.Fragment>
  );
};

export default FormUser;
