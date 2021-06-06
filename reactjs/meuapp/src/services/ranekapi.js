import { fetchApi } from "../helpers/index";

const getProduct = async (value) =>
  await fetchApi(`https://ranekapi.origamid.dev/json/api/produto/${value}`);

export { getProduct };
