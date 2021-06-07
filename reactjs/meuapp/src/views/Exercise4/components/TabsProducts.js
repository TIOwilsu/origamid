import React from "react";
import Button from "../../../components/ui/Button";
import Tabs from "../../../components/ui/Tabs";
import Loading from "../../../components/ui/Loading";
import CardProduct from "./CardProduct";
import { getProduct } from "../../../services/ranekapi";

const TabsProducts = () => {
  const [product, setProduct] = React.useState("");
  const tabs = [
    { button: { type: "tablet", text: "Tablet" } },
    {
      button: { type: "smartphone", text: "Smartphone" },
    },
    { button: { type: "notebook", text: "Notebook" } },
  ];

  const fetchProduct = async (value) => {
    try {
      const data = await getProduct(value);
      setProduct(data);
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    setProduct("");
    fetchProduct("tablet");
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
          {product.id ? <CardProduct data={product} /> : <Loading />}
        </React.Fragment>
      </Tabs.Contents>
    </Tabs>
  );
};

export default TabsProducts;
