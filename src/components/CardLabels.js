import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.View`
  padding: 0px 16px 16px 16px;
  /* border-width: 1px;
  border-color: red; */
  flex-direction: row;
`;

const Label = styled.View`
  background-color: green;
  height: 24px;
  width: 50;
  margin: 0px 4px 0px 0px;
`;

const CardLabels = () => {
  return (
    <Container>
      <Label />
      <Label />
      <Label />
    </Container>
  );
};

CardLabels.propTypes = {};

export default CardLabels;
