import { IProduct } from "../../types/productsType";
import { formatCurrencyToBRL } from "../../utils/currency";
import { Button } from "../button/Button";
import { useCardMovies } from "./hooks/useCardMovies";
import { ContentCardMovie, IconButton, ImageCardMovie } from "./styled";
import cartIcon from "../../assets/icons/mdaddshoppingcart 1.svg";

interface ICardMoviesProps {
  dataMovie: IProduct;
}

export function CardMovies({ dataMovie }: ICardMoviesProps) {
  const { handleAddProduct, hasProductSelected } = useCardMovies(dataMovie);

  return (
    <ContentCardMovie>
      <ImageCardMovie src={dataMovie.image} alt={dataMovie.title} />
      <p>{dataMovie.title}</p>
      <h4>{formatCurrencyToBRL(dataMovie.price)}</h4>
      <Button
        width="100%"
        variant={hasProductSelected ? "secondary" : "primary"}
        startIcon={
          <IconButton>
            <img src={cartIcon} alt="Adicionar ao carrinho" />
            <span>{hasProductSelected?.quantity}</span>
          </IconButton>
        }
        onClick={() => handleAddProduct(dataMovie)}
      >
        Adicionar ao carrinho
      </Button>
    </ContentCardMovie>
  );
}
