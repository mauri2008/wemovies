import { formatCurrencyToBRL } from "../../utils/currency";
import { EmptyState } from "../emptyState/EmptyState";
import { useShopping } from "./hooks/useShopping";
import { Button } from "../../components/button/Button";
import { ContentShopping, FooterShopping, FooterShoppingLabel } from "./styled";
import { ListShoppingItens } from "../../components/listShoppingItens/ListShoppingItens";

export function Shopping() {
  const { products, total, handleFinishedShopping } = useShopping();

  if (products.length === 0) {
    return <EmptyState />;
  }

  return (
    <ContentShopping>
      <ListShoppingItens />
      <FooterShopping>
        <Button
          variant="primary"
          className="buttonFinish"
          onClick={handleFinishedShopping}
        >
          Finalizar Pedido
        </Button>
        <FooterShoppingLabel>
          <span>Total</span>
          <span>{formatCurrencyToBRL(total)}</span>
        </FooterShoppingLabel>
      </FooterShopping>
    </ContentShopping>
  );
}
