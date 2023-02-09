import styled from 'styled-components';
import { colors, screenSize } from '../../styles/variables';

export const SEmptyCart = styled.main`
  display: flex;
	flex-direction: column;
	align-items: center;
	gap: 32px;
	background-color: ${colors.grey000};
	max-width: 960px;
	border-radius: 4px;
	font-size: 20px;
	font-weight: bold;
	text-align: center;
	color: ${colors.grey700};
	padding: 64px;
	overflow: hidden;
	margin: 0 16px;

	@media (min-width: ${screenSize.small}) {
		margin: 24px auto;
	}
`;
