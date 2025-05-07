'use client'
import React from 'react'
import Image from 'next/image'
import logo from '../images/logo.svg'
import { FaHeart,FaShoppingCart } from "react-icons/fa";
import { useState } from 'react';
import { useAppSelector } from '../redux/hooks';
import Link from 'next/link';

const Header = () => {
  const [isSidebarOpen,setisSidebarOpen] = useState(false);
  const cart = useAppSelector((state:any) => state.counter.cart);
const total = Object.values(cart).reduce(
  (acc:any, item:any) => acc + parseInt(item.price.replace(/[₹,]/g, '')) * item.quantity,
  0
);
  return (
    <>
    <div className='bg-slate-100 font-light'>
      <div className='flex gap-9 justify-center h-9 items-center text-black'>
        <span>SELL ON PEPPERFRY</span>
        <span>BUY FRANCHISE</span>
        <span>BUY IN BULK</span>
        <span>GIFT CARDS</span>
        <span>TRACK YOUR ORDER</span>
        <span>CONTACT US</span>
      </div>
    </div>
    <div className='grid grid-cols-8 bg-white text-black h-18 justify-center items-center border-b'>
      <div className='col-span-4'>
        <Image className='ml-[30px]' src={logo} alt="logo"/>
      </div>
      <div className='col-span-1'>SignUp Now</div>
      <div className='col-span-1'>Find a Store</div>
      <div className='flex gap-12 pl-16'>
      <FaHeart className='text-2xl' />
      <FaShoppingCart className='text-2xl cursor-pointer'
       onClick={()=>setisSidebarOpen(true)}
      />
      </div>
    </div>
    <div className='flex gap-9 justify-center h-9 items-center text-black bg-white pt-5'>
        <span>Furniture</span>
        <span>Mattresses</span>
        <span>Home Decor</span>
        <span>Sofas</span>
        <span>Beds</span>
        <span>Tables</span>
        <span>Kitchen</span>
        <span>Modular</span>
      </div>
      {/*sidebar*/}
      <div
        className={`fixed top-0 right-0 h-full w-[600px] bg-slate-200 text-black shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='flex justify-between items-center p-4 border-b'>
          <h2 className='text-lg font-semibold'>Your Cart</h2>
          <button
            className='text-xl font-bold'
            onClick={() => setisSidebarOpen(false)}
          >
            ×
          </button>
        </div>
        <div className='p-4 space-y-4'>
  {Object.values(cart).length === 0 ? (
    <p>Your cart is empty.</p>
  ) : (
    <>
      {Object.values(cart).map((item:any) => (
        <div key={item.id} className='flex justify-between items-center'>
          <span>{item.description}</span>
          <span>{item.quantity} × {item.price}</span>
        </div>
      ))}
      <hr />
      <h3 className='text-lg font-bold'>Total: ₹{total.toLocaleString()}</h3>
      <Link href='/buynow'>
      <button className='bg-orange-600 p-3 rounded-xl shadow-xl text-white'>GO TO CART</button>
      </Link>
    </>
  )}
</div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className='fixed inset-0 backdrop-blur-xs z-40'
          onClick={() => setisSidebarOpen(false)}
        />
      )}
    </>
  )
}

export default Header