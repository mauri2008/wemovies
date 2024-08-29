import styled from "styled-components";

const ContentFinish = styled.div`
  display: flex;

  align-items: center;
  flex-direction: column;
  height: 516px;
  width: 100%;
  background: #fff;
  border-radius: 4px;
  padding: 64px;
  box-sizing: border-box;
  gap: 24px;

  & h1 {
    text-align: center;
  }
`;

const SectionImageFinish = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export { ContentFinish, SectionImageFinish };
