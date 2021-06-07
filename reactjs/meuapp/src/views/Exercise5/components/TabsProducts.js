import React from "react";
import Button from "../../../components/ui/Button";
import Tabs from "../../../components/ui/Tabs";
import Loading from "../../../components/ui/Loading";
import CardProduct from "./CardProduct";
import { getProduct } from "../../../services/ranekapi";

const TabsProducts = () => {
  const localType = localStorage.getItem("type");

  const tabs = [
    { button: { type: "notebook", text: "notebook" } },
    { button: { type: "smartphone", text: "smartphone" } },
  ];
  const [tab] = tabs;

  const [type, setType] = React.useState(
    localType ? localType : tab.button.type
  );
  const [product, setProduct] = React.useState("");

  const types = tabs.map(({ button }) => button.type);

  React.useEffect(() => {
    setProduct("");
    localStorage.setItem("type", type);
    const fetchProduct = async () => {
      try {
        const data = await getProduct(type);
        setProduct(data);
      } catch (err) {
        console.log(err);
      }
    };
    if (type) fetchProduct();
  }, [type]);

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
        {product.id ? <CardProduct data={product} /> : <Loading />}
      </Tabs.Contents>
    </Tabs>
  );
};

export default TabsProducts;
