import { useApiGetMovies } from "../../../services/hooks/useApiGetMovies";

export function useHome() {
  const { movies, isLoading } = useApiGetMovies();

  return { movies, isLoading };
}
