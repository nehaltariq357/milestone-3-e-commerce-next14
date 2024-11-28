"use client"
import React, { useState, useEffect } from 'react';

interface types {
  title: string;
  price: number;
  id: number;
  image: string;
  desc: string;
}

const ProductPage = ({ params }: { params: { product_page: string } }) => {
  // Change the state type to a single product object, not an array
  const [product, setProduct] = useState<types | null>(null);

  // Fetch data inside a useEffect hook to ensure it runs after the component mounts
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`http://localhost:3000/api/product/${params.product_page}`);
      const data = await response.json();
      setProduct(data);
    };
    fetchPosts();
  }, [params.product_page]); // Only re-fetch when the product_page param changes

  // Render loading or error state if product is not loaded yet
  if (!product) {
    return <div>Loading...</div>;  // Show loading if product is not yet loaded
  }

  return (
    <div>
      <p>{product.title}</p>
      <p>{product.price}</p>
      <p>{product.id}</p>
      <p>{product.desc}</p>
    </div>
  );
}

export default ProductPage;
