import { ContentEmptyState, SectionLabelEmptyState } from "./styled";
import emptyIcon from "../../assets/empty.svg";
import { Button } from "../../components/button/Button";
import { useNavigatePages } from "../../hooks/useNavigatePages";

export function EmptyState() {
  const { handleNavigate } = useNavigatePages();

  return (
    <ContentEmptyState>
      <h1>Parece que não há nada por aqui :( </h1>
      <SectionLabelEmptyState>
        <img src={emptyIcon} alt="Ícone de carrinho vazio" />
      </SectionLabelEmptyState>

      <Button
        variant="primary"
        width="173px"
        onClick={() => handleNavigate("/")}
      >
        Recarregar página
      </Button>
    </ContentEmptyState>
  );
}
