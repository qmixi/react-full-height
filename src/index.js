/*
 * External imports
 */
import React from "react";
import { oneOfType, node, arrayOf, string, number, bool } from "prop-types";
import styled from "styled-components";

/*
 * Internal imports
 */
import { getResulutionValue } from "./utils";

const MIN_BREAKPOINT = 0;
const MAX_BREAKPOINT = 1000000;

/*
 * Component definitions
 */
const Wrapper = styled.section`
  box-sizing: border-box;
  overflow: auto;

  ${({ startWidth, endWidth }) =>
    `@media screen and (min-width: ${getResulutionValue(
      startWidth,
      MIN_BREAKPOINT
    )}) and (max-width: ${getResulutionValue(endWidth, MAX_BREAKPOINT)})`} {
    ${({ canExceed }) => (canExceed ? "min-height" : "height")}: 100vh;
  }
`;

const ReactFullheight = ({
  children,
  className,
  startWidth,
  endWidth,
  canExceed,
  ...otherProps
}) => (
  <Wrapper
    startWidth={startWidth}
    endWidth={endWidth}
    className={className}
    canExceed={canExceed}
    {...otherProps}
  >
    {children}
  </Wrapper>
);

/*
 * Component's prop-types definition
 */
ReactFullheight.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
  className: string,
  startWidth: number,
  endWidth: number,
  canExceed: bool,
};

/*
 * Component's default prop-types definition
 */
ReactFullheight.defaultProps = {
  startWidth: MIN_BREAKPOINT,
  endWidth: MAX_BREAKPOINT,
};

/*
 * Export main component
 */
export default ReactFullheight;
