import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../features/cartSlice";

export default function Cart() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>
      {items.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          {items.map((item) => (
            <div key={item.id} className="flex justify-between p-2 border-b">
              <p>{item.title}</p>
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="text-red-500"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            onClick={() => dispatch(clearCart())}
            className="bg-red-600 text-white px-4 py-2 mt-4 rounded"
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
}
