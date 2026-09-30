
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";

const Cards = () => {
  const { products, loading } = useContext(ProductContext);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h2 className="text-2xl font-semibold">Loading...</h2>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="mb-6 text-3xl font-bold">Products</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <div key={product.id} className="rounded-lg border p-4 shadow-sm">
            <img src={product.image} alt={product.title} className="mb-4 h-48 w-full object-contain" />
            <h2 className="mb-2 line-clamp-2 text-lg font-semibold">{product.title}</h2>
            <p className="mb-2 text-sm text-gray-500">{product.category}</p>
            <p className="mb-4 text-xl font-bold">${product.price}</p>
            <Link to={`/product/${product.id}`} className="block rounded-lg bg-black px-4 py-2 text-center text-white hover:bg-gray-800">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;