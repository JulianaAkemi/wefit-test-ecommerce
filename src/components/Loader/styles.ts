import styled from 'styled-components';
import { screenSize } from '../../styles/variables';

export const SLoader = styled.div`
  height: calc(100vh - 68px);
  display: flex;
  justify-content: center;
  align-items: center;

  & > img {
    position: relative;
    top: -68px;
  }

  @media (min-width: ${screenSize.small}) {
    height: calc(100vh - 74px);

    & > img {
      top: -74px;
    }
  }
`;
