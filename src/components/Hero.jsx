export default function Hero() {
  return (
    <section className="bg-gray-100 py-20 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to ShopMate</h1>
      <p className="text-lg mb-6">
        Discover amazing products at unbeatable prices.
      </p>
      <a
        href="/products"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Shop Now
      </a>
    </section>
  );
}
