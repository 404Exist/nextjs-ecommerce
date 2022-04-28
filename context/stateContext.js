import React, { createContext, useContext, useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart"));
    if (cartData) {
      setCartItems(cartData);
      let totalQty = cartData.reduce((acc, curr) => acc + curr.qty, 0);
      let totalPrice = cartData.reduce((acc, curr) => acc + (curr.price * curr.qty), 0);
      setTotalQuantities(totalQty);
      setTotalPrice(totalPrice);
    }
  }, []);

  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  let foundProduct, index;

  const onAdd = (product, qty) => {
    const isProductInCart = cartItems.find(item => item._id === product._id);
    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * qty);
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + qty);
    if (isProductInCart) {
      const updatedCartItems = [...cartItems].map(item => {
        if (item._id === product._id) {
          return { ...item, qty: item.qty + qty };
        }
        return item;
      })
      setCartItems(updatedCartItems);
    } else {
      product.qty = qty;
      setCartItems([...cartItems, {...product}]);
    }
    toast.success(`${qty} ${product.name} added to cart`);
    setQty(1);
  }
  const onRemove = id => {
    foundProduct = cartItems.find((item) => item._id === id);
    const newCartItems = cartItems.filter((item) => item._id !== id);
    setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.qty);
    setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.qty);
    setCartItems(newCartItems);
  }
  const toggleCartItemQty = (id, value) => {
    foundProduct = cartItems.find(item => item._id === id);
    index = cartItems.findIndex(item => item._id === id);
    const newCartItems = [...cartItems];
    console.log(newCartItems);
    if(value === 'inc') {
      foundProduct.qty += 1;
      newCartItems[index] = foundProduct;
      setCartItems(newCartItems);
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)
      setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1)
    } else if(value === 'dec') {
      if (foundProduct.qty > 1) {
        foundProduct.qty -= 1;
        newCartItems[index] = foundProduct;
        setCartItems(newCartItems);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
        setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1)
      }
    }
  }
  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  }
  const decQty = () => {
    setQty((prevQty) => prevQty - 1 < 1 ? 1 : prevQty - 1);
  }
  return (
    <Context.Provider value={{
      showCart,
      cartItems,
      totalPrice,
      totalQuantities,
      qty,
      setShowCart,
      onAdd,
      onRemove,
      toggleCartItemQty,
      incQty,
      decQty,
      setCartItems,
      setTotalPrice,
      setTotalQuantities
    }}>
      {children}
    </Context.Provider>
  )
}
export const useStateContext = () => useContext(Context);