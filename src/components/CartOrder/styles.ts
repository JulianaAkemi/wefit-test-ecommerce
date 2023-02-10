import styled from 'styled-components';
import { colors, screenSize } from '../../styles/variables';

export const SCartOrder = styled.main`
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: ${colors.grey000};
  max-width: 960px;
  height: calc(100vh - 84px);
  border-radius: 4px;
  padding: 16px;
  margin: 0 16px;

  @media (min-width: ${screenSize.small}) {
    margin: 24px auto;
    padding: 24px;
    gap: 0;
    height: unset;
  }
`;

export const SHeader = styled.div`
  display: none;
  color: ${colors.grey200};
  font-size: 14px;
  font-weight: bold;

  @media (min-width: ${screenSize.small}) {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    max-width: 960px;
    margin-bottom: 24px;

    p {
      width: auto;
    }

    p:nth-of-type(1) {
      flex-grow: 3;
    }

    p:nth-of-type(2) {
      flex-grow: 1;
    }

    p:nth-of-type(3) {
      flex-grow: 2;
    }
  }
`;

export const SCartFooter = styled.div`
  width: 100%;
  border-top: 1px solid ${colors.grey200};
  align-self: flex-end;
  margin-top: auto;

  @media (min-width: ${screenSize.small}) {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 960px;
    padding-top: 21px;
  }

  & > div:first-of-type {
    @media (min-width: ${screenSize.small}) {
      position: relative;
      right: -28%;
    }
  }

  a > div {
    @media (min-width: ${screenSize.small}) {
      position: relative;
      right: 288%;
      width: 235.42px;
    }
  }
`;

export const STotal = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 32px;
  width: 100%;
  margin: 16px 0;

  p:nth-of-type(1) {
    font-size: 14px;
    font-weight: bold;
    color: ${colors.grey200};
  }

  p:nth-of-type(2) {
    font-size: 24px;
    font-weight: bold;
    color: ${colors.grey700};
    margin-right: 16px;
  }

  @media (min-width: ${screenSize.small}) {
    margin: 0;
  }
`;
