/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import Products from '../models/Products'
import mongoose from 'mongoose'

const Tshirts = ({ products }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className=" container px-5 py-6 mx-auto">
        <div className="flex flex-wrap -m-4  justify-center ">
          {products.map((item) => {
            return (
              <Link key={item._id} href={`/Products/${item.slug}`} >
                <a className="lg:w-1/4 md:w-1/3 m-5 md:m-5  shadow-lg border p-4 w-full" >
                  <div className="flex justify-center align-middle rounded overflow-hidden">
                    <img alt="ecommerce" className="h-[55vh] " src={item.img} />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.category}</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">{item.title}</h2>
                    <p className="mt-1">{item.color}</p>
                    <p className="mt-1">Rs. {item.price}</p>
                    <p className="mt-1">{item.size}</p>
                  </div>
                </a>
              </Link>

            )
          })
          }
        </div>
      </div>
    </section >
  )
}

export async function getServerSideProps(context) {

  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI)
  }

  let products = await Products.find({ category: 'tshirts' })

  return {
    props: { products: JSON.parse(JSON.stringify(products)) }, // will be passed to the page component as props
  }
}


export default Tshirts