'use client';

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, increment, decrement } from '../redux/counterSlice';

import bed1 from '../images/bed1.webp';
import bed2 from '../images/bed2.webp';
import bed3 from '../images/bed3.webp';
import bed4 from '../images/bed4.webp';

const products = [
  { id: 1, image: bed1, description: 'Eva Sheesham Wood King Size Bed In Honey Oak Finish', price: '₹9999' },
  { id: 2, image: bed2, description: 'Segur Sheesham Wood King Size Bed In Provincial Teak Finish', price: '₹8499' },
  { id: 3, image: bed3, description: 'Brevik Sheesham Wood Queen Size Bed In Provincial Teak Finish', price: '₹7899' },
  { id: 4, image: bed4, description: 'Eva Sheesham Wood Queen Size Bed In Provincial Teak Finish', price: '₹6999' },
];

const Page = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state:any) => state.counter.cart);

  return (
    <>
      <Header />
      <div className="grid grid-cols-4 gap-5 bg-white pt-[20px] p-6">
        {products.map((product) => (
          <div key={product.id} className="col-span-1 hover:scale-105 transition-transform">
            <Image src={product.image} alt="product" />
            <div className="p-3 text-black">
              <h1 className="text-xl font-semibold">{product.price}</h1>
              <h4>{product.description}</h4>

              {cart[product.id] ? (
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => dispatch(decrement(product.id))}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    -
                  </button>
                  <span>{cart[product.id].quantity}</span>
                  <button
                    onClick={() => dispatch(increment(product.id))}
                    className="bg-green-500 text-white px-3 py-1 rounded"
                  >
                    +
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => dispatch(addToCart(product))}
                  className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
                >
                  Buy Now
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Page;
