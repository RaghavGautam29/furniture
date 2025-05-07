import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.webp'
import BEDS from '../images/BEDS.webp'
import bookshelves from '../images/bookshelves.webp'
import cabinets from '../images/cabinets.webp'
import chairs from '../images/chairs.webp'
import Diningset from '../images/Diningset.webp'
import studytable from '../images/studytable.webp'
import sofas from '../images/sofas.webp'
import sidetable from '../images/sidetable.webp'

const Home = () => {
  return (
    <>
    <div className='grid grid-cols-3 p-8 bg-white'>
      <div className='col-span-2'>
        <Image className='' src={img1} alt='' />
      </div>
      <div className='col-span-1'>
        <Image className='object-cover object-fit' src={img2} alt=''/>
      </div>
    </div>
    <div className='bg-white'>
        <h1 className='text-orange-600 text-2xl font-semibold text-center border-b pb-4'>Shop All Things Home</h1>
        <div className='grid grid-cols-4 p-16 pt-3 gap-16'>
            <div className='col-span-1'>
              <Link href='/beds'><Image src={BEDS} alt=''/></Link>
            </div>
            <div className='col-span-1'>
              <Image src={bookshelves} alt=''/>
            </div>
            <div className='col-span-1'>
              <Image src={chairs} alt=''/>
            </div><div className='col-span-1'>
              <Image src={Diningset} alt=''/>
            </div><div className='col-span-1'>
              <Image src={sofas} alt=''/>
            </div><div className='col-span-1'>
              <Image src={studytable} alt=''/>
            </div><div className='col-span-1'>
              <Image src={cabinets} alt=''/>
            </div><div className='col-span-1'>
              <Image src={sidetable} alt=''/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home