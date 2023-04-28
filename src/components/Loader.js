import styled, { keyframes } from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const pulseAnimation = keyframes`
  0% {opacity: 0; transform: scale(0);}
  50% {opacity: 1; transform: scale(1);}
  100% {opacity: 0; transform: scale(1);}
`;

const Dot = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  margin: 0.7rem 0 0.7rem 0;
  background-color: ${props =>
    props.black ? 'var(--color-black)' : 'var(--color-white)'};
  animation: ${pulseAnimation} 0.5s linear infinite;
  animation-fill-mode: none;
  &:not(:last-child) {
    margin-right: 0.6rem;
  }
  &:nth-child(1) {
    animation-delay: 0s;
  }
  &:nth-child(2) {
    animation-delay: 0.1s;
  }
  &:nth-child(3) {
    animation-delay: 0.1s;
  }
`;

export default function DotPulseLoader({ $black }) {
  return (
    <Wrapper>
      <Dot black={$black} />
      <Dot black={$black} />
      <Dot black={$black} />
    </Wrapper>
  );
}
