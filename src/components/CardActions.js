import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import CardButton from "./CardButton";

const Container = styled.View`
  padding: 16px;
  /* border-width: 1px;
  border-color: red; */
  flex-direction: row;
  justify-content: space-between;
`;

const CardLabels = () => {
  return (
    <Container>
      <CardButton value="Share" />
      <CardButton value="Photo" />
      <CardButton value="More" />
    </Container>
  );
};

CardLabels.propTypes = {};

export default CardLabels;
