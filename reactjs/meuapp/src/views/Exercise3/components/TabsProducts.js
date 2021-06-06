import React from "react";
import Button from "../../../components/ui/Button";
import Tabs from "../../../components/ui/Tabs";
import CardProduct from "./CardProduct";

const TabsProducts = () => {
  const products = [
    { title: "Notebook", items: ["16gb ram", "512gb"] },
    { title: "Smartphone", items: ["2gb ram", "128gb"] },
  ];

  const tabs = [
    {
      button: { text: "Home" },
      content: {
        title: "Home",
        html: <p>Essa é a home do site</p>,
      },
    },
    {
      button: { text: "Produtos" },
      content: {
        title: "Produtos",
        html: products.map((product, key) => (
          <CardProduct data={product} key={key} />
        )),
      },
    },
  ];

  return (
    <Tabs>
      <Tabs.Buttons>
        {tabs.map(({ button }, key) => (
          <Button key={key}>{button.text}</Button>
        ))}
      </Tabs.Buttons>
      <Tabs.Contents>
        {tabs.map(({ content }, key) => (
          <React.Fragment key={key}>
            <h3 className="title">{content.title}</h3>
            {content.html}
          </React.Fragment>
        ))}
      </Tabs.Contents>
    </Tabs>
  );
};

export default TabsProducts;
