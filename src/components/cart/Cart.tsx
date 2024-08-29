import { ContentCart, SectionLabelCart } from "./style";
import cartIcon from "../../assets/icons/cart.svg";
import { useCart } from "./hooks/useCart";
import { useNavigatePages } from "../../hooks/useNavigatePages";

export function Cart() {
  const { products } = useCart();
  const { handleNavigate } = useNavigatePages();

  return (
    <ContentCart onClick={() => handleNavigate("/carrinho")}>
      <SectionLabelCart>
        <p>Meu Carrinho</p>
        <span>{products.length} itens</span>
      </SectionLabelCart>
      <img src={cartIcon} alt="Carrinho de compras" />
    </ContentCart>
  );
}
