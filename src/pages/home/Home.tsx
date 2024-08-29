import { CardMovies } from "../../components/cardsMovies/CardMovies";
import { Loading } from "../../components/loading/Loading";
import { useHome } from "./hooks/useHome";
import { ContentHome } from "./styled";

export function Home() {
  const { movies, isLoading } = useHome();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <ContentHome>
      {movies && movies?.map((movie) => <CardMovies dataMovie={movie} />)}
    </ContentHome>
  );
}
