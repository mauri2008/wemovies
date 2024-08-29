import { CardShoppingItens } from "./CardShoppingItens";
import { ContainerListShoppingItens } from "./styled";
import { TableShoppingItens } from "./TableShoppingItens";

export function ListShoppingItens() {
  return (
    <ContainerListShoppingItens>
      <TableShoppingItens />
      <CardShoppingItens />
    </ContainerListShoppingItens>
  );
}
