import { useNavigate } from "react-router-dom";

export function useNavigatePages() {
  const navigate = useNavigate();

  function handleNavigate(path: string) {
    navigate(path);
  }

  return { handleNavigate };
}
