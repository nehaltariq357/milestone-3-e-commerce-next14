"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface types {
  title: string;
  price: number;
  id: number;
  image: string;
  desc: string;
  detailDesc: string;
}

const ProductPage = ({ params }: { params: { product_page: string } }) => {
  const [product, setProduct] = useState<types | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`http://localhost:3000/api/product?id=${params.product_page}`);
      const data = await response.json();
      setProduct(data);
    };
    fetchPosts();
  }, [params.product_page]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4 md:px-10 lg:px-20">
      <div className="w-full max-w-4xl bg-white p-10 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-10 text-center">{product.title}</h1>

        {/* Product Details */}
        <div className="flex flex-col md:flex-row gap-10">
          {/* Product Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src={product.image}
              alt={product.title}
              className="object-cover rounded-lg"
              width={400}
              height={400}
            />
          </div>

          {/* Product Info */}
          <div className="w-full md:w-1/2 space-y-5">
            <p className="text-xl font-bold text-green-600">{`$${product.price}`}</p>
            <p className="text-gray-700">{product.detailDesc}</p>
            <p className="text-sm text-gray-500">{product.desc}</p>

            {/* Add to Cart Button */}
            <button className="text-white bg-green-600 px-5 py-2 rounded-md cursor-pointer hover:bg-green-700">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
