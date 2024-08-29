import { useQuery } from "react-query";
import { AxiosInstance } from "../axios";
import { IProduct } from "../../types/productsType";

export function useApiGetMovies() {
  const { data: movies, isLoading } = useQuery("getMovies", () => {
    return AxiosInstance.get("/movies").then(
      (res) => res.data?.products as IProduct[]
    );
  });

  return { movies, isLoading };
}
