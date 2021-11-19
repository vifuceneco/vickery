import ProductItem from "../ProductItem/ProductItem";
import './ProductGrid.scss';

const ProductGrid = ({ items = [] }) => {
  
  if(!items || !items.length) return null;

  return (
    <div className="ProductGrid">
      { items.map(item => <ProductItem key={item.id} {...item} /> ) }
    </div>    
  );
};
  
export default ProductGrid; 