import styled from 'styled-components';
import { colors } from '../../styles/variables';

export const SButton = styled.div.attrs(
  (props: { quantity: number; width: string }) => props,
)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: ${(props) => (props.width ? props.width : '100%')};
  background-color: ${(props) =>
    props.quantity > 0 ? colors.green300 : colors.blue300};
  color: ${colors.grey000};
  border-radius: 4px;
  font-size: 12px;
	padding: 11px;

  p:first-of-type {
    margin-left: ${(props) => (typeof props.quantity === 'number' ? '5px' : 0)};
    margin-right: ${(props) => (typeof props.quantity === 'number' ? '13px' : 0)};
    font-weight: 400;
  }

  p:nth-of-type(2) {
    font-weight: 700;
  }

  &:hover {
    cursor: pointer;
  }
`;
