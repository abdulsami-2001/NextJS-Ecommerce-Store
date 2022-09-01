import Link from 'next/link'
import Image from 'next/image'
import React, { useRef, useContext } from 'react'
import { AiOutlineShoppingCart, AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';
import StoreContext from '../../Context/Store/StoreContext'

const Navbar = () => {
    const { CartItems, clearWholeCart, editExistingCartItem } = useContext(StoreContext)
    const ref = useRef()
    const toggleCart = () => {
        if (ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-full')
            ref.current.classList.add('translate-x-0')
        } else if (!ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-0')
            ref.current.classList.add('translate-x-full')
        }
    }


    return (
        <>
            <div className="flex flex-col sticky top-0 z-10 bg-white shadow-md md:flex-row md:justify-center py-2 ">
                <ul className='flex font-bold text-xl md:text-2xl self-center md:space-x-6 space-x-2 mx-5 ' >
                    <Link href='/about' ><a>About</a></Link>
                    <Link href='/mugs' ><a>Mugs</a></Link>
                    <Link href='/tshirts' ><a>Tshirts</a></Link>
                </ul>
                <div className='flex justify-center' >
                    <Link href='/'  >
                        <a>
                            <Image src='/Bababen.png' alt='BabaBen Logo' width={250} height={100} />
                        </a>
                    </Link>
                </div>
                <ul className='flex font-bold text-xl md:text-2xl self-center md:space-x-6 space-x-2 mx-5'  >
                    <Link href='/hoodies' ><a>Hodies</a></Link>
                    <Link href='/stickers' ><a>Sticker</a></Link>
                    <Link href='/contact' ><a>Contact</a></Link>
                </ul>
                <div>
                    <AiOutlineShoppingCart onClick={toggleCart} className='absolute cursor-pointer top-3 right-3' size={24} />
                </div>
            </div>


            {/* <!-- drawer component --> */}
            <div className=" overflow-x-hidden">
                <div ref={ref} className=" fixed h-[100vh] z-10 max-h-[100vh] p-4 shadow-lg bg-white w-80 dark:bg-gray-800 transform transition-transform translate-x-full right-0 top-0" >
                    <button onClick={toggleCart} type="button" aria-controls="drawer-right-example" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        <span className="sr-only">Close menu</span>
                    </button>
                    <p className='pt-10 px-2 text-xl font-medium' >Your Cart Items:</p>
                    {CartItems.length <= 0 && <p className='px-2 pt-5 text-xs' >Your Cart Is Currently Empty</p>}
                    <div className="py-5 px-2 text-gray-500 dark:text-gray-400">
                        {CartItems.length > 0 && CartItems.map((item) => (
                            <div key={item.Key} className='flex py-1 text-sm justify-between items-center space-x-2'>
                                <p className='text-xs' >{item.Name}</p>
                                <div className='cartItemIncDec flex space-x-2 items-center' >
                                    <AiFillMinusCircle className='text-xl cursor-pointer text-black' onClick={() => editExistingCartItem(item, 'minus')} />
                                    <p>{item.Quantity}</p>
                                    <AiFillPlusCircle className='text-xl cursor-pointer text-black' onClick={() => editExistingCartItem(item, 'plus')} />
                                </div>
                            </div>
                        ))}
                        <div className='flex py-1 items-center space-x-2 ' >
                            {CartItems.length > 0 &&
                                <Link href='/checkout' >
                                    <button type="button" className="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">Checkout</button>
                                </Link>
                            }

                            {CartItems.length == 0 && <button type="button" disabled className="inline-block px-6 py-2.5 bg-red-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">Checkout</button>}
                            {CartItems.length > 0 && <button onClick={clearWholeCart} type="button" className="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">Clear Cart</button>}
                            {CartItems.length == 0 && <button onClick={clearWholeCart} type="button" disabled className="inline-block px-6 py-2.5 bg-red-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">Clear Cart</button>}
                        </div>
                    </div>

                </div>
            </div>

        </>

    )
}

export default Navbar