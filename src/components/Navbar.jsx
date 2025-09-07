import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const cartCount = useSelector((state) => state.cart.items.length);

  return (
    <nav className="p-4 bg-blue-600 text-white flex justify-between">
      <Link to="/">E-Shop</Link>
      <div className="flex gap-4">
        <Link to="/cart">Cart ({cartCount})</Link>
        <Link to="/checkout">Checkout</Link>
      </div>
    </nav>
  );
}
