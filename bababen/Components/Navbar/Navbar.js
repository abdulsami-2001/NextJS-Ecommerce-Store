import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Navbar = () => {
    return (
        <>
            <div className="flex flex-col  md:flex-row md:justify-center py-5 ">
                <ul className='flex  font-bold self-center md:space-x-6 space-x-2 mx-5 ' >
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
                <ul className='flex font-bold  self-center md:space-x-6 space-x-2 mx-5'  >
                    <Link href='/hoodies' ><a>Hodies</a></Link>
                    <Link href='/stickers' ><a>Sticker</a></Link>
                    <Link href='/contact' ><a>Contact</a></Link>
                </ul>
            </div>
            <Link href='/checkout' >
                <div>
                    <AiOutlineShoppingCart className='absolute top-3 right-3' size={24} />
                </div>
            </Link>
        </>

    )
}

export default Navbar