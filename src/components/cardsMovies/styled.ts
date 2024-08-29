import styled from "styled-components";

const ContentCardMovie = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  gap: 16px;
  border-radius: 4px;
  padding: 16px;
  min-width: calc(100% / 3 - 16px);
  box-sizing: border-box;

  @media (max-width: 768px) {
    min-width: calc(100% - 16px);
  }

  @media (max-width: 425px) {
    min-width: 100%;
  }

  & p {
    font-size: 12px;
    font-weight: 700;
    line-height: 16.34px;
    color: #333333;
  }
`;

const ImageCardMovie = styled.img`
  width: 147px;
  height: 188px;
  border-radius: 4px;
`;

const IconButton = styled.div`
  display: flex;
  & span {
    font-size: 12px;
    font-weight: 400;
    line-height: 16.34px;
  }
`;

export { ContentCardMovie, ImageCardMovie, IconButton };
