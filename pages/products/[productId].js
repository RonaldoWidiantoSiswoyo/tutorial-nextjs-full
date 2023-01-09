// import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSWR } from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const ProductDetail = () => {
  const router = useRouter();
  const { productId } = router.query;

  const { data, error } = useSWR(
    `http://localhost:5000/products/${productId}`,
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  //   const [name, setName] = useState("");
  //   const [price, setPrice] = useState("");
  //   useEffect(() => {
  //     const getProductById = async () => {
  //       const response = await fetch(
  //         `http://localhost:5000/products/${productId}`
  //       );
  //       const data = await response.json();
  //       setName(data.name);
  //       setPrice(data.price);

  //       setProducts(data);
  //     };
  //     getProductById();
  //   }, [productId]);

  //   const router = useRouter();
  //   if (router.isFallback) {
  //     return <div>Loading...</div>;
  //   }
  return (
    <div>
      {data.name}-{data.price}
    </div>
  );
};

export default ProductDetail;

// export async function getStaticPaths() {
//   const response = await fetch(`http://localhost:5000/products?_limit=2`);
//   const data = await response.json();

//   const paths = data.map((item) => ({
//     params: {
//       productId: `${item.id}`,
//     },
//   }));

//   return {
//     paths,
//     fallback: "blocking",
//   };
// }

// export async function getServerSideProps({ params }) {
//   const response = await fetch(
//     `http://localhost:5000/products${params.productId}`
//   );
//   const data = await response.json();

//   if (!data.id) {
//     return notFound: true;
//   }
//   return {
//     props: {
//       product: data,
//     },
// revalidate: 1,
//   };
// }
