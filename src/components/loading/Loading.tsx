import { ContentLoading, LoadingImage } from "./styled";
import loadingIcon from "../../assets/icons/load-spinner.png";

export function Loading() {
  return (
    <ContentLoading>
      <LoadingImage src={loadingIcon} alt="Carregando" />
    </ContentLoading>
  );
}
