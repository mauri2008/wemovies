import styled from "styled-components";

const ContentEmptyState = styled.div`
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
`;

const SectionLabelEmptyState = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-bottom: 2px solid #3f3d56;
  width: 100%;
`;

export { ContentEmptyState, SectionLabelEmptyState };
