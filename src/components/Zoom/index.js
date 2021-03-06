import { CSSTransition } from "react-transition-group";
import styled from "styled-components";

const AnimatedContainer = styled.div`
  ${(props) => `
 &.zoom-appear {
    transform: scale(0);

  }
  &.zoom-appear-active {
    transform: scale(1);
    transition: transform ${props.timeout}ms ease;

  }
  &.zoom-enter {
    transform: scale(0);

  }
  &.zoom-enter-active {
    transform: scale(1);
    transition: transform ${props.timeout}ms ease;

  }
  &.zoom-exit {
    transform: scale(1);

  }
  &.zoom-exit-active {
    transform: scale(0);
    transition: transform ${props.timeout}ms ease;

  }
  `}

`;

export default function Zoom(props) {
  const { children, timeout, ...otherProps } = props;
  return (
    <CSSTransition
      classNames="zoom"
      timeout={timeout}
      unmountOnExit
      {...otherProps}
    >
      <AnimatedContainer timeout={timeout}>{children}</AnimatedContainer>
    </CSSTransition>
  );
}
