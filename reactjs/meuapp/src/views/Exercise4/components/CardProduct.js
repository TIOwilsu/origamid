import Card from "../../../components/ui/Card";

const CardProduct = ({ data }) => {
  const name = () => data.nome;
  const price = () => `R$ ${data.preco}`;
  const photos = () => data.fotos;
  const email = () => data.usuario_id;
  const sold = () => (data.vendido === "true" ? "Vendido" : "Não vendido");

  return (
    <Card>
      <h4 className="title">{name()}</h4>
      <p className="price">{price()}</p>
      <p className="sold">{sold()}</p>
      <p className="email">{email()}</p>
      <div className="photos">
        {photos().map((photo, key) => (
          <img src={photo.src} alt={`img-${photo.titulo}`} key={key} />
        ))}
      </div>
    </Card>
  );
};

export default CardProduct;
