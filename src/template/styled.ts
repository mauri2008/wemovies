import styled from "styled-components";

const ContentRoot = styled.div`
  display: flex;
  max-width: 1080px;
  margin: 0 auto;
  flex-direction: column;
  box-sizing: border-box;
`;

const SectionRoot = styled.section`
  display: block;
  padding: 16px;
  padding-top: 0;
  box-sizing: border-box;
`;

export { ContentRoot, SectionRoot };
