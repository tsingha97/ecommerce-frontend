import { Link } from "react-router-dom";
import { useState } from "react";
import MiniCart from "./MiniCart";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center relative">
      <Link to="/" className="text-2xl font-bold">
        ShopMate
      </Link>
      <nav className="space-x-4 flex items-center">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <button onClick={() => setOpen((o) => !o)} className="relative">
          🛒
        </button>
        {open && (
          <div onMouseLeave={() => setOpen(false)}>
            <MiniCart />
          </div>
        )}
      </nav>
    </header>
  );
}
