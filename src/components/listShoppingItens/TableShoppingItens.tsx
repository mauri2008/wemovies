import { useProducts } from "../../context/ProductsContext";
import { formatCurrencyToBRL } from "../../utils/currency";
import {
  ActionQtdProcuct,
  BodyTableShopping,
  ButtonDelete,
  HeaderTableShopping,
  TableShopping,
  ViewProductTable,
  ViewProductTableLabels,
} from "./styled";

import iconAdd from "../../assets/icons/iconAdd.svg";
import iconSub from "../../assets/icons/iconSub.svg";
import iconDelete from "../../assets/icons/iconDelete.svg";

export function TableShoppingItens() {
  const {
    products,
    handleSubQtdProduct,
    handleAddQtdProduct,
    handleRemoveProduct,
  } = useProducts();

  return (
    <TableShopping>
      <HeaderTableShopping>
        <tr>
          <th>Produto</th>
          <th>Qtd</th>
          <th>SubTotal</th>
          <th></th>
        </tr>
      </HeaderTableShopping>
      <BodyTableShopping>
        {products.map((product) => (
          <tr key={product.id}>
            <td>
              <ViewProductTable>
                <img src={product.image} alt={product.title} />
                <ViewProductTableLabels>
                  <span>{product.title}</span>
                  <span>{formatCurrencyToBRL(product.price)}</span>
                </ViewProductTableLabels>
              </ViewProductTable>
            </td>
            <td>
              <ActionQtdProcuct>
                <button onClick={() => handleSubQtdProduct(product.id)}>
                  <img src={iconSub} alt="Subtrair" />
                </button>
                <input type="text" value={product.quantity} />
                <button onClick={() => handleAddQtdProduct(product.id)}>
                  <img src={iconAdd} alt="Adicionar" />
                </button>
              </ActionQtdProcuct>
            </td>
            <td>
              {formatCurrencyToBRL(product.price * (product.quantity || 0))}
            </td>
            <td>
              <ButtonDelete onClick={() => handleRemoveProduct(product.id)}>
                <img src={iconDelete} alt="Deletar" />
              </ButtonDelete>
            </td>
          </tr>
        ))}
      </BodyTableShopping>
    </TableShopping>
  );
}
