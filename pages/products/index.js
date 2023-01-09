// import { useState, useEffect } from "react";
import { useSWR } from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Products = () => {
  const { data, error } = useSWR("http://localhost:5000/products", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   const getProducts = async () => {
  //     const response = await fetch("http://localhost:5000/products");
  //     const data = await response.json();

  //     setProducts(data);
  //   };
  //   getProducts();
  // }, []);
  // console.log(data);
  return (
    <>
      {data.map((item) => {
        <ul key={item.id}>
          <li>{item.name}</li>
        </ul>;
      })}
    </>
  );
};

// export async function getServerSideProps() {
//   const response = await fetch("http://localhost:5000/products");
//   const data = await response.json();
//   console.log(data);
//   return {
//     props: {
//       data,
//     },
// revalidate: 1,
//   };
// }

export default Products;
