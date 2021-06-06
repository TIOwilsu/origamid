import React from "react";
import Button from "../../../components/ui/Button";
import Tabs from "../../../components/ui/Tabs";
import CardProductRaneApi from "./CardProductRaneApi";
import { getProduct } from "../../../services/ranekapi";

const TabsProductRaneApi = (props) => {
  const [product, setProduct] = React.useState("");
  const tabs = [
    { button: { type: "tablet", text: "Tablet" } },
    {
      button: { type: "smartphone", text: "Smartphone" },
    },
    { button: { type: "notebook", text: "Notebook" } },
  ];

  const fetchProduct = async (value) => {
    setProduct("");
    const data = await getProduct(value);
    setProduct(data);
  };

  React.useEffect(() => {
    const connect = async () => {
      try {
        fetchProduct("tablet");
      } catch (err) {
        console.log(err);
      }
    };
    connect();
  }, []);

  return (
    <Tabs>
      <Tabs.Buttons>
        {tabs.map(({ button }, key) => (
          <Button key={key} handler={() => fetchProduct(button.type)}>
            {button.text}
          </Button>
        ))}
      </Tabs.Buttons>
      <Tabs.Contents>
        <React.Fragment>
          {product ? (
            <CardProductRaneApi data={product} />
          ) : (
            <p class="loading">Carregando...</p>
          )}
        </React.Fragment>
      </Tabs.Contents>
    </Tabs>
  );
};

export default TabsProductRaneApi;
