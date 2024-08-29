import { Outlet } from "react-router-dom";
import { GlobalStyle } from "./globalStyle";
import { Header } from "../components/header/Header";
import { ContentRoot, SectionRoot } from "./styled";

export function Root() {
  return (
    <>
      <GlobalStyle />

      <ContentRoot>
        <Header />
        <SectionRoot>
          <Outlet />
        </SectionRoot>
      </ContentRoot>
    </>
  );
}
