import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Base = styled.View`
  background-color: #fff;
  border-radius: 4px;
`;

const Card = ({ children, width, height }) => {
  return (
    <Base
      style={{
        width: width,
        height: height,
        elevation: 4,
        // offblack
        shadowColor: "#1D262B",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3
      }}
    >
      {children}
    </Base>
  );
};

Card.propTypes = {
  children: PropTypes.node,
  width: PropTypes.number,
  height: PropTypes.number
};

export default Card;
