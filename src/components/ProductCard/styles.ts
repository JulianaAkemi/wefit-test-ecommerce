import styled from 'styled-components';
import { colors, screenSize } from '../../styles/variables';

export const SProductCard = styled.main`
  display: flex;
	flex-direction: column;
	align-items: center;
	background-color: ${colors.grey000};
	width: 343px;
	height: 281px;
	border-radius: 4px;
	padding: 10px 11px;
	gap: 10px;
	font-size: 12px;
	font-weight: 700;

	@media (min-width: ${screenSize.medium}) {
		width: 309.33px;
		height: 281px;
	}
`;
