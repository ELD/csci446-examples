import { useLoaderData } from "react-router-dom";

export async function getProduct({ params }) {
  const response = await fetch(`https://dummyjson.com/products/${params.productId}`);
  return await response.json();
}

export default function SingleProduct() {
  const product = useLoaderData();

  return (
    <div key={product.id}>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Rating: {product.rating}</p>
      <p>Quantity in-stock: {product.stock}</p>
    </div>
  );
}
