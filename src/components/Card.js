import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

const Base = styled.View`
  height: 320px;
  width: 280px;
  margin: 0px 0px 0px 8px;
  background-color: #fff;
  border-radius: 4px;
`;

const Card = ({ children }) => {
  return (
    <Base
      style={{
        elevation: 5,
        // offblack
        shadowColor: "#1D262B",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 4
      }}
    >
      {children}
    </Base>
  );
};

Card.propTypes = {
  children: PropTypes.node
};

export default Card;
