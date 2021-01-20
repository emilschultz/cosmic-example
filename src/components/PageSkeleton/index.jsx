import styled, { keyframes } from 'styled-components';
import Container from '../Container';

export const pulseAnimation = keyframes`
  0% {
    background-color: rgba(0, 0, 0, 0.02);
  }

  50% {
    background-color: rgba(0, 0, 0, 0.06);
  }

  100% {
    background-color: rgba(0, 0, 0, 0.02);
  }
`;

const PageSkeleton = styled(Container)`
  height: 640px;
  border-radius: 0.33rem;
  animation: ${pulseAnimation} 0.5s linear infinite;
`;

export default PageSkeleton;