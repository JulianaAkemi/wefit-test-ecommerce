import styled from 'styled-components';
import { colors } from '../../styles/variables';

export const SGallery = styled.main`
	max-width: 960px;
  display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 16px;
	margin: 0 auto;
	padding-top: 24px;
	color: ${colors.grey800};
`;
