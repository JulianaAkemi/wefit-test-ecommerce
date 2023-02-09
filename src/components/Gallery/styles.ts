import styled from 'styled-components';
import { colors, screenSize } from '../../styles/variables';

export const SGallery = styled.main`
  max-width: 960px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  margin: 0 auto;
	padding-top: 0;
	padding-bottom: 16px;
  color: ${colors.grey800};

  @media (min-width: ${screenSize.small}) {
		padding-top: 24px;
  }
`;
