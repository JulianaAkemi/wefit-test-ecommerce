import styled from 'styled-components';
import { colors, screenSize } from '../../../../styles/variables';

export const SCartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (min-width: ${screenSize.small}) {
    margin-bottom: 24px;
  }
`;

export const SImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & > img {
    width: 64px;
    height: 82px;
    margin-right: 16px;
  }

  @media (min-width: ${screenSize.small}) {
    flex-direction: column;
    align-items: flex-start;

    & > img {
      width: 89px;
      height: 114px;
      margin-right: 52px;
    }
  }
`;

export const SItemInfo = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 22px;
  min-width: 199px;
  color: ${colors.grey700};
  font-weight: bold;

  & > img {
    align-self: flex-end;
  }

  @media (min-width: ${screenSize.medium}) {
    flex-wrap: nowrap;
    width: 761px;

    & > img {
      position: relative;
      right: -556px;
      top: -15px;
    }
  }
`;

export const STitle = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  width: calc(100% - 16px);

  & > p:first-of-type {
    font-size: 14px;
    min-width: fit-content;
    flex-grow: 3;
  }

  & > p:nth-of-type(2) {
    font-size: 16px;
    margin-right: 16px;
  }

  @media (min-width: ${screenSize.medium}) {
    display: inline-block;
    justify-content: flex-start;
    width: 305px;

    & > p:first-of-type {
      margin-bottom: 16px;
    }

    & > img {
      margin-right: 24px;
    }
  }
`;
