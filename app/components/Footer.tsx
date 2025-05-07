import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='bg-slate-300 text-black'>
    <div className='grid grid-cols-4 p-8'>
        <div className='col-span-1'>
            <ul>
            <li><h1 className='font-semibold'>Useful Links</h1></li>
            <li>Sofas</li>
            <li>Beds</li>   
            <li>Dining Table</li>
            <li>Study Table</li>
            <li>Dressing Table</li> 
            </ul>
        </div>
        <div className='col-span-1'>
          <ul>
            <li><h1 className='font-semibold'>Corporate</h1></li>
            <li>About us</li>
            <li>Coporate Governance</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className='col-span-1'>
          <ul>
            <li><h1 className='font-semibold'>Partner With Us</h1></li>
            <li>Sell on Pepperfry</li>
            <li>Become a Frachisee</li>
            <li>Become a Pep Homiee</li>
          </ul>
        </div>
        <div className='col-span-1'>
          <ul>
            <li><h1 className='font-semibold'>Need Help?</h1></li>
            <li>FAQ</li>
            <li>Policies</li>
          </ul>
        </div>
    </div>
    </div>
    <div className='bg-slate-300 text-black text-center'>
        Made with ❤️ by Raghav Gautam
    </div>
    </>
  )
}

export default Footer