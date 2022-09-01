import React, { useState, useEffect } from 'react'
import StoreContext from './StoreContext'

const StoreState = (props) => {
  const [SubTotal, SetSubTotal] = useState(0)
  const [CartItems, SetCartItems] = useState([
    // {
    //   Key: 189,
    //   // Key: Math.random() * 1,
    //   Name: "Wear The Code, Wear The Code, Wear The Code, Bla Bla Bla Bla Wear The Code, Bla Bla Bla Bla",
    //   Size: 'L, S',
    //   Variant: 'Red, Blue',
    //   Quantity: 8

    // },
    // {
    //   Key: 2,
    //   // Key: Math.random() * 6,
    //   Name: "Wear Max Code, Cause Wear Is Bear",
    //   Size: 'M, XS',
    //   Variant: 'Red, Pink',
    //   Quantity: 1

    // },
    // {
    //   Key: 5,
    //   // Key: Math.random() * .3,
    //   Name: "Wear Tax Code",
    //   Size: 'M, S',
    //   Variant: 'Green, Blue',
    //   Quantity: 9
    // }
  ])



  useEffect(() => {
    calculateSubTotal()
    try {
      if (localStorage.getItem("CART_ITEMS")) {
        SetCartItems([...CartItems, ...JSON.parse(localStorage.getItem("CART_ITEMS"))])
      }
    } catch (error) {
      console.error(error)
      localStorage.clear()
    }
  }, [])

  const addItemToCart = (obj, itemQuantity) => {
    let myCart = CartItems
    let myObj;
    for (let i = 0; i < myCart.length; i++) {
      if (obj.Key == myCart[i].Key) {
        myObj = myCart[i]
      }
    }

    if (myObj) {
      myObj.Quantity = myObj.Quantity + itemQuantity
    } else {
      myCart.push({ ...obj, Quantity: itemQuantity })
    }

    SetCartItems([...myCart])
    localStorage.setItem("CART_ITEMS", JSON.stringify(CartItems))
    calculateSubTotal()
  }

  const deleteItemFromCart = (obj) => {
    let CartItemsHolder = CartItems
    CartItemsHolder.map((item) => item.Key != obj.Key)
    SetCartItems(CartItemsHolder)
  }


  const clearWholeCart = () => {
    SetCartItems([])
    localStorage.setItem("CART_ITEMS", JSON.stringify([]))

  }

  const editExistingCartItem = (obj, identifier) => {

    let myCart = CartItems

    if (identifier == 'plus') {
      for (const key in obj) {
        if (key == "Quantity") {
          obj['Quantity'] = obj['Quantity'] + 1
          SetCartItems([...myCart])
          localStorage.setItem("CART_ITEMS", JSON.stringify([...myCart]))

        }
      }
    } else if (identifier == 'minus') {
      for (const key in obj) {

        if (key == "Quantity" && obj['Quantity'] > 0) {
          obj['Quantity'] = obj['Quantity'] - 1
          SetCartItems([...myCart])
          localStorage.setItem("CART_ITEMS", JSON.stringify([...myCart]))

        }

        if (key == "Quantity" && obj['Quantity'] === 0) {
          let CartItemsHolder = CartItems.filter((item) => {
            return item.Key != obj.Key
          })
          SetCartItems(CartItemsHolder)
          localStorage.setItem("CART_ITEMS", JSON.stringify([...CartItemsHolder]))
        }
      }
    }

    calculateSubTotal()

  }

  const calculateSubTotal = () => {
    let tempSubTotal = 0

    CartItems.reduce((acc, item) => (
      tempSubTotal = acc + (item.Price * item.Quantity)
    ), 0)

    SetSubTotal(tempSubTotal)
  }


  return (
    <StoreContext.Provider value={{ SubTotal, calculateSubTotal, SetSubTotal, CartItems, SetCartItems, addItemToCart, deleteItemFromCart, clearWholeCart, editExistingCartItem }} >
      {props.children}
    </StoreContext.Provider>
  )
}

export default StoreState

// if (CartItems.length == 0) {
//   SetCartItems([...CartItems, { ...obj, Quantity: itemQuantity }])

// }



// for (let index = 0; index < CartItems.length; index++) {
//   if (CartItems[index].Quantity == obj.Key) {
//     console.log("key matched")
//     CartItems[index].Quantity = CartItems[index].Quantity + 1
//     SetCartItems([...CartItems])
//     break
//   } else {
//     console.log("chala ky nhi?")
//     SetCartItems([...CartItems, { ...obj, Quantity: itemQuantity }])
//   }
// }

// for (const item of [...CartItems]) {
//   if (item.Key == obj.Key) {
//     console.log("key matched")
//     SetCartItems([...CartItems, { ...obj, Quantity: itemQuantity+1 }])
//   }
// }

// for (const item of CartItems) {
//   if (item.Key != obj.Key) {
//     console.log("key matched")
//     SetCartItems([...CartItems, { ...obj, Quantity: itemQuantity }])
//   }
// }
