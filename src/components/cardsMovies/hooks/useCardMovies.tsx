import { IProduct } from "../../../types/productsType";
import { useProducts } from "../../../context/ProductsContext";
import { useMemo } from "react";

export function useCardMovies(dataMovie: IProduct) {
  const { handleAddProduct, products } = useProducts();

  const hasProductSelected = useMemo(() => {
    return products.find((product) => product.id === dataMovie.id);
  }, [products, dataMovie.id]);

  return { handleAddProduct, hasProductSelected };
}
