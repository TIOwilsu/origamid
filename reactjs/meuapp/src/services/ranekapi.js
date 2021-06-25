import { api } from "../helpers/index";

const getProduct = async (value = "") =>
  await api.get(`https://ranekapi.origamid.dev/json/api/produto/${value}`);

const postProduct = async (body) =>
  await api.post("https://ranekapi.origamid.dev/json/api/usuario/", body);

export { getProduct, postProduct };
