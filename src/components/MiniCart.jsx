import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function MiniCart() {
  const { state } = useCart();
  const subtotal = state.cartItems.reduce(
    (sum, i) => sum + i.price * i.quantity,
    0
  );

  return (
    <div className="bg-white text-gray-800 shadow-lg rounded p-4 w-64 absolute right-0 top-12 z-20">
      {state.cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="divide-y divide-gray-200 mb-4">
            {state.cartItems.map((item) => (
              <li key={item.id} className="py-2 flex justify-between">
                <span className="flex-1 truncate">{item.title}</span>
                <span>x{item.quantity}</span>
              </li>
            ))}
          </ul>
          <p className="font-semibold mb-4">Subtotal: ${subtotal.toFixed(2)}</p>
          <Link to="/cart">
            <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
              View Cart
            </button>
          </Link>
        </>
      )}
    </div>
  );
}
