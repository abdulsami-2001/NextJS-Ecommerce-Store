import StoreContext from './StoreContext'
import React, { useState } from 'react'

const StoreState = (props) => {
  const [SubTotal, SetSubTotal] = useState(0)
  const [CartItems, SetCartItems] = useState([
    {
      Key: Math.random() * 1,
      Name: "Wear The Code, Wear The Code, Wear The Code, Bla Bla Bla Bla Wear The Code, Bla Bla Bla Bla",
      Size: 'L, S',
      Variant: 'Red, Blue',
      Quantity: 8

    },
    {
      Key: Math.random() * 6,
      Name: "Wear Max Code, Cause Wear Is Bear",
      Size: 'M, XS',
      Variant: 'Red, Pink',
      Quantity: 1

    },
    {
      Key: Math.random() * .3,
      Name: "Wear Tax Code",
      Size: 'M, S',
      Variant: 'Green, Blue',
      Quantity: 9
    }
  ])

  const addItemToCart = (obj, itemQuantity) => {
    if(CartItems.length==0){
      SetCartItems([...CartItems, { ...obj, Quantity: itemQuantity }])

    }
    
    for (let index = 0; index < CartItems.length; index++) {
        const element = CartItems[index];
      if ( element.Key === obj.Key) {
        element.Quantity = element.Quantity + 1
        SetCartItems([...CartItems])
      }else{
        SetCartItems([...CartItems, { ...obj, Quantity: itemQuantity }])
      }
    }

  }

  const deleteItemFromCart = (obj) => {
    let CartItemsHolder = CartItems
    CartItemsHolder.map((item) => item.Key != obj.Key)
    SetCartItems(CartItemsHolder)
  }


  const clearWholeCart = () => {
    SetCartItems([])
  }

  const editExistingCartItem = (obj, identifier) => {


    if (identifier == 'plus') {
      for (const key in obj) {
        if (key == "Quantity") {
          obj['Quantity'] = obj['Quantity'] + 1
          SetCartItems([...CartItems])
        }
      }
    } else if (identifier == 'minus') {
      for (const key in obj) {

        if (key == "Quantity" && obj['Quantity'] > 0) {
          obj['Quantity'] = obj['Quantity'] - 1
          SetCartItems([...CartItems])
        }

        if (key == "Quantity" && obj['Quantity'] === 0) {
          let CartItemsHolder = CartItems.filter((item) => {
            return item.Key != obj.Key
          })
          SetCartItems(CartItemsHolder)
        }
      }
    }

  }

  console.log(CartItems)
  return (
    <StoreContext.Provider value={{ SubTotal, SetSubTotal, CartItems, SetCartItems, addItemToCart, deleteItemFromCart, clearWholeCart, editExistingCartItem }} >
      {props.children}
    </StoreContext.Provider>
  )
}

export default StoreState