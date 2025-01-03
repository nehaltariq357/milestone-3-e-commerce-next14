import { client } from "@/sanity/lib/client";
import Product_page_client from "../Product_page_client";

export default async function Product_page({
  params,
}: {
  params: { product_page: string };
}) {
  const query = `*[_type == "products" && slug.current == "${params.product_page}"][0]{
    title,price,productImage,body,slug
  }`;

  const product = await client.fetch(query);

  return <Product_page_client product={product} />;
}
