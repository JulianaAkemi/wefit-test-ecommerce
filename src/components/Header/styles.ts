import styled from 'styled-components';
import { colors } from '../../styles/variables';

export const SHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.grey700};
  color: ${colors.grey000};
  max-width: 960px;
  padding: 18px 10px;
	margin: 0 auto;
`;

export const Logo = styled.p`
  color: ${colors.grey000};
  font-weight: bold;
  font-size: 20px;
`;
