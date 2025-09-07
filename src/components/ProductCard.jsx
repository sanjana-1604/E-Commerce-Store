import { memo } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

const ProductCard = memo(({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="border p-4 rounded shadow-md">
      <img src={product.image} alt={product.title} className="h-40 mx-auto" />
      <h3 className="text-lg font-semibold">{product.title}</h3>
      <p className="text-gray-700">${product.price}</p>
      <button
        onClick={() => dispatch(addToCart(product))}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
      >
        Add to Cart
      </button>
    </div>
  );
});

export default ProductCard;
