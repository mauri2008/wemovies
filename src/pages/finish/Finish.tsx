import { ContentFinish, SectionImageFinish } from "./styled";
import { Button } from "../../components/button/Button";
import finishVector from "../../assets/finish.svg";
import { useFinish } from "./hooks/useFinish";

export function Finish() {
  const { handleClickBack } = useFinish();

  return (
    <ContentFinish>
      <h1>Compra realizada com sucesso ! </h1>
      <SectionImageFinish>
        <img src={finishVector} alt="compra finalizada" />
      </SectionImageFinish>

      <Button variant="primary" width="173px" onClick={handleClickBack}>
        Voltar
      </Button>
    </ContentFinish>
  );
}
