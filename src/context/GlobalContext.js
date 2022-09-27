import { createContext, React, useContext, useEffect, useState } from "react";
import products from "api/products.json";

export const GlobalContext = createContext();

export function GlobalContextProvider({ children }) {
  const [phoneCheck, setPhoneCheck] = useState(false);
  const [order, setOrder] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [pathes, setPathes] = useState("");
  const [location, setLocation] = useState("");
  const [state, setState] = useState({
    productList: products,
    cart: [],
    list: [],
  });

  useEffect(() => {
    if (window.location.pathname.split("/")[1] === "kategoriler") {
      setPathes(window.location.pathname.split("/")[2]);
    } else if (window.location.pathname.split("/")[2] === "kategoriler") {
      setPathes(window.location.pathname.split("/")[3]);
    }
  }, [location]);

  const handleClick = () => {
    setLocation(window.location.pathname);
  };

  const addToCart = (product) =>
    setState({
      ...state,
      cart: state.cart.find((cartItem) => cartItem.id === product.id)
        ? state.cart.map((cartItem) =>
            cartItem.id === product.id
              ? { ...cartItem, count: cartItem.count + 1 }
              : cartItem
          )
        : [...state.cart, { ...product, count: 1 }],
    });

  const increase = (id) => {
    setState({
      ...state,
      cart: state.cart.map((cartItem) =>
        cartItem.id === id
          ? {
              ...cartItem,
              count: cartItem.count + 1,
            }
          : cartItem
      ),
    });
  };
  const decrease = (id) => {
    setState({
      ...state,
      cart: state.cart.map((cartItem) =>
        cartItem.id === id
          ? {
              ...cartItem,
              count: cartItem.count > 1 ? cartItem.count - 1 : 1,
            }
          : cartItem
      ),
    });
  };
  const removeFromCart = (id) =>
    setState({
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== id),
    });



  function formatPhoneNumber(value) {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\0-9]/g, "");
    const phoneNumberLength = phoneNumber.length;

    if (phoneNumberLength < 4) {
      return phoneNumber.replace(/[6-9]/g, "");
    }
    if (4 < phoneNumberLength < 12) {
      return `${phoneNumber.slice(0, 3)} ${phoneNumber.slice(4)}`;
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        formatPhoneNumber,
        phoneCheck,
        setPhoneCheck,
        state: state,
        addToCart,
        increase,
        decrease,
        removeFromCart,
        setOrder,
        order,
        number,
        setNumber,
        name,
        pathes,
        setName,
        handleClick,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
export function ContextProvider() {
  return useContext(GlobalContext);
}
