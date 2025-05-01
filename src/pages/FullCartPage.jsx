import { useCart } from "../context/CartContext";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function FullCartPage() {
  const { state, dispatch } = useCart();
  const shippingCost = 5.0;
  const subtotal = state.cartItems.reduce(
    (sum, i) => sum + i.price * i.quantity,
    0
  );
  const total = subtotal + shippingCost;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-6">
        <h1 className="text-2xl font-semibold mb-6">Your Cart</h1>
        {state.cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {state.cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-4"
              >
                <div className="flex items-center space-x-4 flex-1">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-16 object-contain"
                  />
                  <div>
                    <h2 className="font-medium">{item.title}</h2>
                    <p>${item.price}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() =>
                      dispatch({
                        type: "UPDATE_QUANTITY",
                        payload: {
                          id: item.id,
                          quantity: Math.max(1, item.quantity - 1),
                        },
                      })
                    }
                    className="px-2 border rounded"
                  >
                    –
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() =>
                      dispatch({
                        type: "UPDATE_QUANTITY",
                        payload: {
                          id: item.id,
                          quantity: item.quantity + 1,
                        },
                      })
                    }
                    className="px-2 border rounded"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() =>
                    dispatch({ type: "REMOVE_FROM_CART", payload: item.id })
                  }
                  className="text-red-600 hover:underline"
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="mt-6 space-y-2 text-right">
              <p>Subtotal: ${subtotal.toFixed(2)}</p>
              <p>Shipping: ${shippingCost.toFixed(2)}</p>
              <p className="font-semibold">Total: ${total.toFixed(2)}</p>
            </div>

            <div className="text-right mt-4">
              <button
                disabled
                className="bg-gray-400 text-white px-6 py-2 rounded cursor-not-allowed"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
