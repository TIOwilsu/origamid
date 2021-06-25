import React from "react";
import Button from "../../../components/ui/Button";
import Tabs from "../../../components/ui/Tabs";
import Loading from "../../../components/ui/Loading";
import Error from "../../../components/ui/Error";
import CardProduct from "./CardProduct";
import { getProduct } from "../../../services/ranekapi";
import { useLocalStorage, useFetch } from "../../../hooks/index";

const TabsProducts = () => {
  const { data, loading, error, request } = useFetch();
  const tabs = [
    { button: { type: "notebook", text: "notebook" } },
    { button: { type: "smartphone", text: "smartphone" } },
  ];
  const [tab] = tabs;

  const [type, setType] = useLocalStorage("type", tab.button.type);

  const types = tabs.map(({ button }) => button.type);

  React.useEffect(() => {
    request(getProduct, type);
  }, [type, request]);

  const click = (value) => setType(value);

  return (
    <Tabs index={types.indexOf(type)}>
      <Tabs.Buttons>
        {tabs.map(({ button }, key) => (
          <Button key={key} handler={() => click(button.type)}>
            {button.text}
          </Button>
        ))}
      </Tabs.Buttons>
      <Tabs.Contents>
        <React.Fragment>
          {data.id && <CardProduct data={data} />}
          {loading && <Loading />}
          {error && <Error />}
        </React.Fragment>
      </Tabs.Contents>
    </Tabs>
  );
};

export default TabsProducts;
