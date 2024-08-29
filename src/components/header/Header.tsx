import { useNavigatePages } from "../../hooks/useNavigatePages";
import { Cart } from "../cart/Cart";
import { ContentHeader } from "./styled";

export function Header() {
  const { handleNavigate } = useNavigatePages();

  return (
    <ContentHeader>
      <h1 onClick={() => handleNavigate("/")}>WeMovies</h1>
      <Cart />
    </ContentHeader>
  );
}
