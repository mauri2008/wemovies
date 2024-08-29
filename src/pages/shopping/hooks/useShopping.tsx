import { useMemo } from "react";
import { useProducts } from "../../../context/ProductsContext";
import { useNavigatePages } from "../../../hooks/useNavigatePages";

export function useShopping() {
  const {
    products,
    handleRemoveProduct,

    handleSubQtdProduct,
    handleAddQtdProduct,
    handleClearProducts,
  } = useProducts();

  const { handleNavigate } = useNavigatePages();

  const total = useMemo(() => {
    return products.reduce((acc, product) => {
      return acc + product.price * (product.quantity || 0);
    }, 0);
  }, [products]);

  function handleFinishedShopping() {
    handleClearProducts();
    handleNavigate("/finalizar");
  }

  return {
    products,
    handleRemoveProduct,
    handleSubQtdProduct,
    handleAddQtdProduct,
    total,
    handleFinishedShopping,
  };
}
