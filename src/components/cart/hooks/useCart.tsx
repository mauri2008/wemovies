import { useProducts } from "../../../context/ProductsContext";

export function useCart() {
  const { products } = useProducts();

  return { products };
}
