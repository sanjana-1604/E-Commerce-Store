import { useEffect, useState, Suspense, lazy } from "react";
import Loader from "../components/Loader";

const ProductCard = lazy(() => import("../components/ProductCard"));

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      <Suspense fallback={<Loader />}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Suspense>
    </div>
  );
}
