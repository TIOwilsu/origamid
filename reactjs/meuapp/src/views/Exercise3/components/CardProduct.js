import Card from "../../../components/ui/Card";
const CardProduct = ({ data }) => {
  const { title, items } = data;
  return (
    <Card>
      <h4>{title}</h4>
      <ul>
        {items.map((item, key) => (
          <li key={key}>{item}</li>
        ))}
      </ul>
    </Card>
  );
};

export default CardProduct;
