import { useNavigatePages } from "../../../hooks/useNavigatePages";

export function useFinish() {
  const { handleNavigate } = useNavigatePages();

  function handleClickBack() {
    handleNavigate("/");
  }

  return { handleClickBack };
}
