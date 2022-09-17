/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import Products from '../models/Products'
import mongoose from 'mongoose'

const arr = ["LP", "BC"]

const Tshirts = ({ products }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className=" container px-5 py-6 mx-auto">
        <div className="flex flex-wrap -m-4  justify-center ">
          {/* {(Products && Products.length == 0) && <div className='font-bold text-lg text-center' >No Tshirts Available Right Now</div>} */}
          {products && Object.keys(products).map((item) => {
            return (
              <Link key={products[item]._id} href={`/Products/${products[item].slug}`} >
                <a className="lg:w-1/4 md:w-1/3 m-5 md:m-5  shadow-lg border p-4 w-full" >
                  <div className="flex justify-center align-middle rounded overflow-hidden">
                    <img alt="ecommerce" className="h-[55vh] " src={products[item].img} />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{products[item].category}</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">{products[item].title}</h2>
                    <div className='my-1 py-1' >
                      {products[item].size.map((itemSize) => <span key={itemSize} className='border border-gray-300 mx-1 px-1 ' >{itemSize}</span>)}
                    </div>
                    <div className='my-1 py-1 flex space-x-1 ' >
                      {products[item].color.map((itemColors) => (
                          <p key={itemColors} >{itemColors}</p>
                      )
                      )}
                    </div>
                    <p className="mt-1">Rs. {products[item].price}</p>
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

  let tshirts = {}
  for (let item of products) {
    if (item.title in tshirts) {

      if (!tshirts[item.title].color.includes(item.color) && item.availableQty > 0) {
        tshirts[item.title].color.push(item.color)
      }

      if (!tshirts[item.title].size.includes(item.size) && item.availableQty > 0) {
        tshirts[item.title].size.push(item.size)
      }

    } else {
      tshirts[item.title] = JSON.parse(JSON.stringify(item))
      if (item.availableQty == 0) {
        tshirts[item.title].color = []
        tshirts[item.title].size = []
      }
      if (item.availableQty > 0) {
        tshirts[item.title].color = [item.color]
        tshirts[item.title].size = [item.size]
      }

    }
  }

  return {
    props: { products: JSON.parse(JSON.stringify(tshirts)) }, // will be passed to the page component as props
  }
}


export default Tshirts