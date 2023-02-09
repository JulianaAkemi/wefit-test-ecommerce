import styled from 'styled-components';
import { colors, screenSize } from '../../styles/variables';

export const SCart = styled.div`
  display: flex;
`;

export const SCartItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 3px;
  margin-right: 8px;
  font-weight: 600;

  & > p:first-of-type {
    display: none;
    font-size: 14px;

    @media (min-width: ${screenSize.medium}) {
      display: inline-block;
    }
  }

  & > p:nth-child(2) {
    font-size: 12px;
    color: ${colors.grey200};
  }
`;
