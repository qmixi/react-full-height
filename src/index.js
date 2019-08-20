import React from "react";
import { oneOfType, node, arrayOf } from "prop-types";
import styled from "styled-components";

const Wrapper = styled.section`
  height: 100vh;
`;

const ReactFullheight = ({ children }) => <Wrapper>{children}</Wrapper>;

ReactFullheight.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired
};

export default ReactFullheight;
