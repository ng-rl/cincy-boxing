'use client';

import { CartProvider } from '@/context/CartContext';
import { BuilderProvider } from '@/context/BuilderContext';
import Cart from '@/components/Cart';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <BuilderProvider>
      <CartProvider>
        {children}
        <Cart />
      </CartProvider>
    </BuilderProvider>
  );
}
