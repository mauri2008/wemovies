import { createContext, useContext, useState } from "react";
import { IProduct } from "../types/productsType";

interface IProductsProvider {
  children: React.ReactNode;
}

interface IProductsContext {
  products: IProduct[];
  handleAddProduct: (product: IProduct) => void;
  handleRemoveProduct: (id: number) => void;
  handleSubQtdProduct: (id: number) => void;
  handleAddQtdProduct: (id: number) => void;
  handleClearProducts: () => void;
}

const ProductsContext = createContext({} as IProductsContext);

export function useProducts() {
  return useContext(ProductsContext);
}

export function ProductsProvider({ children }: IProductsProvider) {
  const [products, setProducts] = useState<IProduct[]>([]);

  function handleAddProduct(product: IProduct) {
    const productExists = products.find((p) => p.id === product.id);

    if (productExists) {
      setProducts((state) =>
        state.map((p) =>
          p.id === product.id && p.quantity
            ? { ...p, quantity: p.quantity + 1 }
            : p
        )
      );
      return;
    }
    setProducts((state) => [...state, { ...product, quantity: 1 }]);
  }

  function handleSubQtdProduct(id: number) {
    const productExists = products.find((p) => p.id === id);

    if (productExists) {
      setProducts((state) =>
        state.map((p) =>
          p.id === id && p.quantity ? { ...p, quantity: p.quantity - 1 } : p
        )
      );
      return;
    }
  }

  function handleAddQtdProduct(id: number) {
    const productExists = products.find((p) => p.id === id);

    if (productExists) {
      setProducts((state) =>
        state.map((p) =>
          p.id === id ? { ...p, quantity: (p.quantity || 0) + 1 } : p
        )
      );
      return;
    }
  }

  function handleRemoveProduct(id: number) {
    setProducts((state) => state.filter((product) => product.id !== id));
  }

  function handleClearProducts() {
    setProducts([]);
  }

  return (
    <ProductsContext.Provider
      value={{
        products,
        handleAddProduct,
        handleRemoveProduct,
        handleSubQtdProduct,
        handleAddQtdProduct,
        handleClearProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
