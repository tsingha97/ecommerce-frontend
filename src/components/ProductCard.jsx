import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { dispatch } = useCart();

  return (
    <div className="border p-4 rounded shadow hover:shadow-lg flex flex-col">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 object-contain mb-4"
      />
      <h3 className="font-medium flex-grow">{product.title}</h3>
      <p className="text-lg font-semibold mt-2">${product.price}</p>
      <button
        onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
      >
        Add to Cart
      </button>
    </div>
  );
}
