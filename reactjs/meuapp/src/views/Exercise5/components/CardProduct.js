import Card from "../../../components/ui/Card";

const CardProduct = ({ data }) => {
  const name = () => data.nome;
  const price = () => `R$ ${data.preco}`;
  return (
    <Card>
      <h4 className="title">{name()}</h4>
      <p className="price">{price()}</p>
    </Card>
  );
};

export default CardProduct;
