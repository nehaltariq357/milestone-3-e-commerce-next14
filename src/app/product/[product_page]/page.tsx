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
    <div>
      <p>{product.title}</p>
      <p>{product.price}</p>
      <p>{product.id}</p>
      <p>{product.desc}</p>
    </div>
  );
}

export default ProductPage;
