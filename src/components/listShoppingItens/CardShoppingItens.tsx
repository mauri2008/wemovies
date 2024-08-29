import { useProducts } from "../../context/ProductsContext";
import { formatCurrencyToBRL } from "../../utils/currency";
import {
  ActionQtdProcuct,
  ButtonDelete,
  ContainerCardShoppingItens,
  ContentCardShoppingItens,
  FooterDescriptionCardShoppingItens,
  HeaderDecriptionCardShoppingItens,
  SectionDescriptionCardShoppingItens,
  SectionRemoveProductCardShoppingItens,
} from "./styled";

import iconAdd from "../../assets/icons/iconAdd.svg";
import iconSub from "../../assets/icons/iconSub.svg";
import iconDelete from "../../assets/icons/iconDelete.svg";

export function CardShoppingItens() {
  const {
    products,
    handleSubQtdProduct,
    handleAddQtdProduct,
    handleRemoveProduct,
  } = useProducts();

  return (
    <ContainerCardShoppingItens>
      {products.map((product) => (
        <ContentCardShoppingItens key={product.id}>
          <img src={product.image} alt={product.title} />

          <SectionDescriptionCardShoppingItens>
            <HeaderDecriptionCardShoppingItens>
              <span>{product.title}</span>
              <div>
                <span>{formatCurrencyToBRL(product.price)}</span>
              </div>
            </HeaderDecriptionCardShoppingItens>

            <FooterDescriptionCardShoppingItens>
              <ActionQtdProcuct>
                <button onClick={() => handleSubQtdProduct(product.id)}>
                  <img src={iconSub} alt="Subtrair" className="iconActions" />
                </button>
                <input type="text" value={product.quantity} />
                <button onClick={() => handleAddQtdProduct(product.id)}>
                  <img src={iconAdd} alt="Adicionar" className="iconActions" />
                </button>
              </ActionQtdProcuct>
              <div className="subtotal">
                <p className="subtotal-label">SubTotal</p>
                <p>
                  {formatCurrencyToBRL(product.price * (product.quantity || 0))}
                </p>
              </div>
            </FooterDescriptionCardShoppingItens>
          </SectionDescriptionCardShoppingItens>
          <SectionRemoveProductCardShoppingItens>
            <ButtonDelete onClick={() => handleRemoveProduct(product.id)}>
              <img src={iconDelete} alt="Deletar" className="iconDelete" />
            </ButtonDelete>
          </SectionRemoveProductCardShoppingItens>
        </ContentCardShoppingItens>
      ))}
    </ContainerCardShoppingItens>
  );
}
