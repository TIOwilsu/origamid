import React from "react";
import Button from "../../components/ui/Button";
import Loading from "../../components/ui/Loading";
import Error from "../../components/ui/Error";
import { GlobalContext } from "../../GlobalStorage";
import { getProduct } from "../../services/ranekapi";
import { useFetch } from "../../hooks/index";

const Exercise6 = () => {
  const { loading, error, request } = useFetch();
  const global = React.useContext(GlobalContext);
  const fetchProduct = async () => {
    try {
      const { json } = await request(getProduct);
      global.setProducts(json);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <React.Fragment>
      <Button onClick={fetchProduct}>Buscar produtos</Button>
      <Button onClick={() => global.setProducts([])}>Limpar dados</Button>
      {global.products.length > 0 && <p>{global.products[0].nome}</p>}
      {loading && <Loading />}
      {error && <Error />}
    </React.Fragment>
  );
};

export default Exercise6;
