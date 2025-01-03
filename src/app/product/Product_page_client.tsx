"use client";

import Image from "next/image";
import { useAppDispatch } from "../redux/store/slice/hooks";
import { addToCart } from "../redux/store/slice/cartSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { urlFor } from "@/sanity/lib/image";
import { PortableText, PortableTextBlock } from "@portabletext/react";

interface ProductProps {
  product: {
    id:number
    title: string;
    price: number;
    productImage: string;
    detailDesc: string;
    body: PortableTextBlock[];
  };
}

const Product_page_client = ({ product }: ProductProps) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: urlFor(product.productImage).url(),
        quantity: 1,
      })
    );
    toast.success("Item added to cart!", {
      position: "top-center",
    });
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-300 p-6">
      <div className="w-full max-w-5xl bg-white rounded-lg shadow-2xl overflow-hidden">
        {/* Product Header */}
        <div className="p-8 bg-gradient-to-r from-green-500 to-green-600 text-white text-center">
          <h1 className="text-4xl font-extrabold">{product.title}</h1>
        </div>

        {/* Product Details */}
        <div className="flex flex-col md:flex-row gap-10 p-8">
          {/* Product Image */}
          <div className="flex-1 flex justify-center items-center">
            <Image
              src={urlFor(product.productImage).url()}
              alt={product.title}
              className="object-cover rounded-lg shadow-lg"
              width={400}
              height={400}
            />
          </div>

          {/* Product Information */}
          <div className="flex-1 space-y-5">
            <p className="text-2xl font-semibold text-green-700">{`$${product.price}`}</p>
            <p className="text-gray-600">{product.detailDesc}</p>

            <div className="text-gray-700">
              <PortableText value={product.body} />
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full bg-green-600 text-white text-lg font-bold py-3 rounded-md hover:bg-green-700 shadow-md transition-all"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </main>
  );
};

export default Product_page_client;
