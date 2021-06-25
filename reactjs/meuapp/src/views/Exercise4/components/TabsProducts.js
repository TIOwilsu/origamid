import React from "react";
import Button from "../../../components/ui/Button";
import Tabs from "../../../components/ui/Tabs";
import Loading from "../../../components/ui/Loading";
import Error from "../../../components/ui/Error";
import CardProduct from "./CardProduct";
import { getProduct } from "../../../services/ranekapi";
import { useFetch } from "../../../hooks/index";

const TabsProducts = () => {
  const { data, loading, error, request } = useFetch();

  const tabs = [
    { button: { type: "tablet", text: "Tablet" } },
    {
      button: { type: "smartphone", text: "Smartphone" },
    },
    { button: { type: "notebook", text: "Notebook" } },
  ];
  const [tab] = tabs;

  React.useEffect(() => {
    request(getProduct, tab.button.type);
  }, [tab.button.type, request]);

  return (
    <Tabs>
      <Tabs.Buttons>
        {tabs.map(({ button }, key) => (
          <Button key={key} handler={() => request(getProduct, button.type)}>
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
