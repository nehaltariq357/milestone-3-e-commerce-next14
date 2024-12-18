  "use client";
  import React, { useEffect, useState } from "react";
  import Link from "next/link";
  import Image from "next/image";

  interface types {
    title:string
    price:number
    id:number
    image:string
    desc:string
  }

  const Product = () => {
    const [product, setProduct] = useState<types[]>([]);

    useEffect(() => {
      const fetchPosts = async () => {
        const response = await fetch(`http://localhost:3000/api/product`);
        const data = await response.json();
        setProduct(data);
      };
      fetchPosts();
    }, []);

    return (
      <main className="px-4 md:px-10 lg:px-20 min-h-screen">
        <h1 className="text-3xl font-bold my-10">Featured Products</h1>

        {/* featured product */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {product.map((post) => (
            <div key={post.id} className="my-10">
              <div className="space-y-5 w-full md:w-[90%]">
                <Link href={`/product/${post.id}`}>
                  <Image
                    src={post.image}
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
                <p className="text-sm md:text-base">{post.desc}</p>
                <Link href={`/product/${post.id}`}>
                  <div className="text-customGreen border-2 border-customGreen px-5 py-2 rounded-md cursor-pointer hover:bg-green-700 hover:text-white w-fit">
                    Add Cart
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* top categories */}
        {product.length > 0 && (
          <div>
            <h2 className="text-3xl font-semibold my-10">Top categories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {product.slice(0, 3).map((post) => (
                <div key={post.id}>
                  <div className="flex flex-col justify-center space-y-5 my-10 w-full md:w-[90%]">
                    <Link href={`/product/${post.id}`}>
                      <Image
                        src={post.image}
                        alt={post.title}
                        className="w-full h-auto object-cover"
                        width={500}
                        height={200}
                      />
                      <h1 className="font-bold mt-5 text-lg md:text-2xl">
                        {post.title}
                      </h1>
                    </Link>
                    <p className="md:text-base font-bold text-2xl">
                    {`$${post.price}`}
                    </p>
                    <Link href={`/product/${post.id}?id=${post.id}`}>
                    <div className="text-customGreen border-2 border-customGreen px-5 py-2 rounded-md cursor-pointer hover:bg-green-700 hover:text-white w-fit">
                    Add Cart
                  </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    );
  };

  export default Product;
