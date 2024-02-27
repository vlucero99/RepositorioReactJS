import { createContext, useState } from 'react';

export const CartContext = createContext({
  Cart: [],
  total: 0,
  setTotal: () => {},
  AddItem: () => {},
  RemoveItem: () => {},
  clearCart: () => {},
  IsInCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [Cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const AddItem = (item, quantity) => {
    // Lógica para agregar elementos
    setCart((prev) => [...prev, { ...item, quantity, subtotal: item.precio * quantity }]);
  };

  const RemoveItem = (itemId, quantity) => {
    // Lógica para eliminar elementos
    const updatedCart = Cart.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: item.quantity - quantity, subtotal: item.subtotal - item.precio * quantity };
      }
      return item;
    });

    setCart(updatedCart.filter((item) => item.quantity > 0));
  };

  const clearCart = () => {
    // Lógica para limpiar el carrito
    setCart([]);
  };

  const IsInCart = (itemId) => {
    // Lógica para verificar si un elemento está en el carrito
    return Cart.some((item) => item.id === itemId);
  };

  return (
    <CartContext.Provider value={{ Cart, total, setTotal, AddItem, RemoveItem, clearCart, IsInCart }}>
      {children}
    </CartContext.Provider>
  );
};
