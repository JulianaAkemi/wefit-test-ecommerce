import styled from 'styled-components';
import { colors, screenSize } from '../../../../styles/variables';

export const SSubtotal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

	@media (min-width: ${screenSize.medium}) {
		margin-left: 90px;
		justify-content: flex-start;
		gap: 35px;
	}
`;

export const SAddOrRemoveItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 11px;
  min-width: 117px;

  & > img {
    &:hover {
      cursor: pointer;
    }
  }
`;

export const SItemQuantity = styled.div`
  display: flex;
  align-items: center;
  height: 26px;
  width: 59px;
  font-size: 14px;
  font-weight: normal;
  color: ${colors.grey700};
  padding: 0 16px;
  border-radius: 4px;
  border: 1px solid ${colors.grey100};
`;

export const SSubtotalPrice = styled.div`
  text-align: right;
  font-weight: bold;

  p:first-of-type {
    color: ${colors.grey200};
    font-size: 12px;
    margin-bottom: 4px;

    @media (min-width: ${screenSize.medium}) {
      display: none;
    }
  }

  p:last-of-type {
    font-size: 16px;
  }
`;
