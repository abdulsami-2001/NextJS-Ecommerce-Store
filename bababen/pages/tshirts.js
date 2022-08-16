/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'

const Tshirts = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className=" container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4  justify-center ">
          <div className="lg:w-1/4 md:w-1/3 m-5 md:m-5  shadow-lg border p-4 w-full">
            <Link href='/Products/Juju' >
              <a className="flex justify-center align-middle rounded overflow-hidden">
                <img alt="ecommerce" className="h-[55vh] " src="https://m.media-amazon.com/images/I/71VnStL2rtL._AC_UX569_.jpg" />
              </a>
            </Link>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">T Shirts</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">Sleeve Less</h2>
              <p className="mt-1">$2.00</p>
              <p className="mt-1">XS, S, M, L, XL, XXL</p>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/3 m-5 md:m-5  shadow-lg border p-4 w-full">
            <Link href='/Products/Juju' >
              <a className="flex justify-center align-middle rounded overflow-hidden">
                <img alt="ecommerce" className="h-[55vh]" src="https://m.media-amazon.com/images/I/81kOK5feZSL._AC_UY550_.jpg" />
              </a>
            </Link>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">T Shirts</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">Sleeve Less</h2>
              <p className="mt-1">$2.00</p>
              <p className="mt-1">XS, S, M, L, XL, XXL</p>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/3 m-5 md:m-5  shadow-lg border p-4 w-full">
            <Link href='/Products/Juju' >
              <a className="flex justify-center align-middle rounded overflow-hidden">
                <img alt="ecommerce" className="h-[55vh] " src="https://m.media-amazon.com/images/I/81VAR0cOuDL._AC_UX569_.jpg" />
              </a>
            </Link>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">T Shirts</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">Sleeve Less</h2>
              <p className="mt-1">$2.00</p>
              <p className="mt-1">XS, S, M, L, XL, XXL</p>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/3 m-5 md:m-5  shadow-lg border p-4 w-full">
            <Link href='/Products/Juju' >
              <a className="flex justify-center align-middle rounded overflow-hidden">
                <img alt="ecommerce" className="h-[55vh] " src="https://m.media-amazon.com/images/I/71VnStL2rtL._AC_UX569_.jpg" />
              </a>
            </Link>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">T Shirts</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">Sleeve Less</h2>
              <p className="mt-1">$2.00</p>
              <p className="mt-1">XS, S, M, L, XL, XXL</p>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/3 m-5 md:m-5  shadow-lg border p-4 w-full">
            <Link href='/Products/Juju' >
              <a className="flex justify-center align-middle rounded overflow-hidden">
                <img alt="ecommerce" className="h-[55vh] " src="https://m.media-amazon.com/images/I/81kOK5feZSL._AC_UY550_.jpg" />
              </a>
            </Link>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">T Shirts</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">Sleeve Less</h2>
              <p className="mt-1">$2.00</p>
              <p className="mt-1">XS, S, M, L, XL, XXL</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tshirts