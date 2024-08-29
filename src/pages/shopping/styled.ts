import styled from "styled-components";

const ContentShopping = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 4px;
  padding: 24px;
  gap: 24px;
`;

const FooterShopping = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .buttonFinish {
    width: 173px;
  }

  @media (max-width: 420px) {
    flex-direction: column-reverse;
    gap: 16px;

    .buttonFinish {
      width: 100%;
    }
  }
`;

const FooterShoppingLabel = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  & > :first-child {
    font-size: 14px;
    font-weight: 700;
    line-height: 19.07px;
    text-transform: uppercase;
    color: #999999;
  }

  & > :last-child {
    font-size: 24px;
    font-weight: 700;
    line-height: 32.68px;
  }

  @media (max-width: 420px) {
    width: 100%;
    justify-content: space-between;
  }
`;

export { ContentShopping, FooterShopping, FooterShoppingLabel };
