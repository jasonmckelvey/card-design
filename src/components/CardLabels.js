import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Label from "./Label";

const Container = styled.View`
  padding: 0px 16px 16px 16px;
  /* border-width: 1px;
  border-color: red; */
  flex-direction: row;
  flex: 1;
  overflow: hidden;
`;

const CardLabels = () => {
  return (
    <Container>
      <Label color="#9B59B6" value="This is my label" />
      <Label color="#E67E22" />
      <Label color="#2ECC71" />
      <Label color="#9B59B6" value="This is my label" />
      <Label color="#E67E22" />
      <Label color="#2ECC71" />
    </Container>
  );
};

CardLabels.propTypes = {};

export default CardLabels;
