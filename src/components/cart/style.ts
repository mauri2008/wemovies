import styled from "styled-components";

const ContentCart = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  & img {
    padding: 8px;
  }
`;

const SectionLabelCart = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  color: #fff;
  & p {
    font-size: 14px;
    font-weight: 600;
    line-height: 19.07px;
  }
  & span {
    font-size: 12px;
    font-weight: 600;
    line-height: 16.34px;
    color: #9999;
  }

  @media (max-width: 768px) {
    & p {
      display: none;
    }
  }
`;

export { ContentCart, SectionLabelCart };
