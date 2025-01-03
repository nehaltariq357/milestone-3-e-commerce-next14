"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAppDispatch } from "../redux/store/slice/hooks";
import { addToCart } from "../redux/store/slice/cartSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

interface types {
  title: string;
  price: number;
  id: number;
  image: string
  slug: string;
}

const Product = () => {
  const [product, setProduct] = useState<types[]>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchPosts = async () => {
      const query = `*[_type == "products"]{
        title,
        price,
        "image": productImage, 
        "slug": slug.current
    }[]`;

      const products = await client.fetch(query);
      setProduct(products);
    };
    fetchPosts();
  }, []);

  const handleAddToCart = (item: types) => {
    dispatch(
      addToCart({
        id: item.id,
        title: item.title,
        price: item.price,
        image: item.image,
        quantity: 1,
      })
    );
    toast.success("Item added to cart!", {
      position: "top-center",
    });
  };

  return (
    <main
      className="px-4 md:px-10 lg:px-20 min-h-screen"
      style={{ backgroundColor: "white" }} // Explicitly setting background color
    >
      <h1 className="text-3xl font-bold py-5 text-black">Featured Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-black">
        {product.map((post) => (
          <div key={post.id} className="my-10">
            <div className="space-y-5 w-full md:w-[90%]">
              <Link href={`/product/${post.slug}`}>
                <Image
                  src={urlFor(post.image).url()}
                  alt={post.title}
                  className="w-full h-auto object-cover"
                  width={500}
                  height={200}
                />
                <h1 className="font-bold mt-5 text-lg md:text-2xl">
                  {post.title}
                </h1>
                <p className="md:text-base font-bold text-2xl mt-4">
                  {`$${post.price}`}
                </p>
              </Link>
           
              <button
                onClick={() => handleAddToCart(post)}
                className="text-customGreen border-2 border-customGreen px-5 py-2 rounded-md cursor-pointer hover:bg-green-700 hover:text-white w-fit"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </main>
  );
};

export default Product;
