import { ItemCount } from "../ItemCount/ItemCount";

const ProductItem = ({ img, name, description, stock, ...props }) => {
  console.log(props);
  return (
    <div className="item">
      <img className="img-fluid" src={img ? img : `https://via.placeholder.com/450?text=${name}`} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <ItemCount stock={stock} />
    </div>
  );
}
  
  export default ProductItem;