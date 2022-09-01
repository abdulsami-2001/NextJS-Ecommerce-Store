import React, { useContext, useEffect } from 'react'
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'
import StoreContext from '../Context/Store/StoreContext'
import Link from 'next/link'

const Checkout = () => {

  const { CartItems, calculateSubTotal, editExistingCartItem, SubTotal } = useContext(StoreContext)

  useEffect(() => {
    calculateSubTotal()
  }, [CartItems])


  return (
    <div className='checkoutCont  py-10 ' >
      <h1 className='font-bold text-center text-3xl pb-10 ' >Checkout</h1>
      <h1 className='font-bold  text-xl px-2 lg:px-5' >Delivery Details</h1>
      <div className="inputCont justify-around flex ">
        <div className="w-1/2 px-2 lg:px-5 py-1">
          <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
          <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
        <div className="w-1/2 px-2 lg:px-5 py-1 ">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
          <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
      </div>
      <div className="inputCont justify-around flex ">
        <div className="w-1/2 px-2 lg:px-5 py-1">
          <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
          <input type="number" id="phone" name="phone" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
        <div className="w-1/2 px-2 lg:px-5 py-1 ">
          <label htmlFor="city" className="leading-7 text-sm text-gray-600">City</label>
          <input type="text" id="city" name="city" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
      </div>
      <div className="textareaCont px-2 lg:px-5 py-1 ">
        <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
        <textarea id="address" name="address" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <div className="inputCont justify-around flex ">
        <div className="w-1/2 px-2 lg:px-5 py-1">
          <label htmlFor="pincode" className="leading-7 text-sm text-gray-600">Pin Code</label>
          <input type="number" id="pincode" name="pincode" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
        <div className="w-1/2 px-2 lg:px-5 py-1 ">
          <label htmlFor="state" className="leading-7 text-sm text-gray-600">State</label>
          <input type="text" id="state" name="state" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
      </div>
      <h1 className='font-bold  text-xl px-2 lg:px-5 py-5' >Your Existing Cart</h1>
      <div className="existingCartCont px-2 lg:px-5 ">
        {/* <p className='pt-10 px-2 text-xl font-medium' >Your Cart Items:</p> */}
        {CartItems.length <= 0 && <p className='text-xs' >Your Cart Is Currently Empty</p>}
        <div className=" text-gray-500 dark:text-gray-400">
          {CartItems.length > 0 && CartItems.map((item) => (
            <div key={item.Key} className='flex py-1 text-sm items-center space-x-5'>
              <p className='text-xs' >{item.Name}</p>
              <div className='cartItemIncDec flex space-x-2 items-center' >
                <AiFillMinusCircle className='text-xl cursor-pointer text-black' onClick={() => editExistingCartItem(item, 'minus')} />
                <p>{item.Quantity}</p>
                <AiFillPlusCircle className='text-xl cursor-pointer text-black' onClick={() => editExistingCartItem(item, 'plus')} />
              </div>
            </div>
          ))}
          Sub Total: {SubTotal}
        </div>
        <Link href='' >
          <button type="button" className="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">Pay {SubTotal}</button>
        </Link>
      </div>
    </div>
  )
}

export default Checkout