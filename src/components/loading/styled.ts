import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
    `;

const ContentLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const LoadingImage = styled.img`
  animation: ${rotate} 2s linear infinite;
  width: 83px;
  height: 83px;
`;

export { ContentLoading, LoadingImage };
