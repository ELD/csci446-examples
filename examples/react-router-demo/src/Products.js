import {Link, useLoaderData} from 'react-router-dom';
export default function Products() {
  const { products } = useLoaderData();

  return (
    <>
      {products.map((product) => (
        <div key={product.id}>
          <Link to={`${product.id}`}><h1>{product.title}</h1></Link>
          <p>{product.description}</p>
          <p>Rating: {product.rating}</p>
          <p>Quantity in-stock: {product.stock}</p>
        </div>
      ))}
    </>
  );
}

async function fetchProducts() {
  const response = await fetch(`https://dummyjson.com/products`);
  return await response.json();
}

export { fetchProducts };
