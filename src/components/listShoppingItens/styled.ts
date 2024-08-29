import styled from "styled-components";

const ContainerListShoppingItens = styled.div``;

const TableShopping = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-bottom: 1px solid #999999;
  @media (max-width: 780px) {
    display: none;
  }
`;

const HeaderTableShopping = styled.thead`
  color: #999999;
  font-weight: bold;
  text-align: left;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 700;
  line-height: 19.07px;
`;
const BodyTableShopping = styled.tbody`
  color: #000;
  & tr > td {
    padding: 16px 0;
  }
`;

const ViewProductTable = styled.div`
  display: flex;
  align-items: center;
  width: 280px;
  gap: 16px;
  & img {
    width: 91px;
    height: 114px;
    object-fit: cover;
  }
`;

const ViewProductTableLabels = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 16px;
  font-weight: 700;
  line-height: 21.79px;
`;

const ActionQtdProcuct = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  align-items: center;
  .iconActions {
    width: 18px;
    height: 18px;
  }

  & button {
    background: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
    margin-top: 5px;
  }

  & input {
    width: 59px;
    height: 26px;
    text-align: center;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
  }
`;

const ButtonDelete = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  .iconDelete {
    width: 18px;
    height: 18px;
  }
`;

const ContainerCardShoppingItens = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid #999999;
  @media (min-width: 780px) {
    display: none;
  }
`;

const ContentCardShoppingItens = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;

  & img {
    width: 64px;
    height: 82px;
    object-fit: cover;
  }
`;

const SectionDescriptionCardShoppingItens = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
  padding: 8px;
`;

const HeaderDecriptionCardShoppingItens = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  line-height: 19.07px;
  font-weight: 700;
  & span {
    word-wrap: break-word;
  }
  & div {
    display: flex;
    gap: 8px;
    align-items: center;
    & span {
      size: 16px;
      line-height: 21.79px;
    }
  }
`;

const FooterDescriptionCardShoppingItens = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  line-height: 19.07px;
  font-weight: 700;
  & span {
    size: 16px;
    line-height: 21.79px;
  }

  .subtotal {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 16px;
    line-height: 21.79px;
  }

  .subtotal-label {
    color: #999999;
    font-size: 12px;
    line-height: 16.34px;
  }
`;

const SectionRemoveProductCardShoppingItens = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding-top: 8px;
`;

export {
  ContainerListShoppingItens,
  TableShopping,
  HeaderTableShopping,
  BodyTableShopping,
  ViewProductTable,
  ViewProductTableLabels,
  ActionQtdProcuct,
  ButtonDelete,
  ContainerCardShoppingItens,
  ContentCardShoppingItens,
  SectionDescriptionCardShoppingItens,
  HeaderDecriptionCardShoppingItens,
  FooterDescriptionCardShoppingItens,
  SectionRemoveProductCardShoppingItens,
};
