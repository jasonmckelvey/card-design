import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.View`
  justify-content: center;
  margin: 0px 4px 0px 0px;
  padding: 4px;
  border-radius: 2px;
`;

const LabelText = styled.Text`
  font-size: 11px;
  font-weight: 600;
  color: #fff;
  text-transform: uppercase;
  /* border-width: 1; */
`;

const Label = ({ value, color }) => {
  return (
    <Container style={{ backgroundColor: color }}>
      <LabelText>{value}</LabelText>
    </Container>
  );
};

Label.defaultProps = {
  value: "Label",
  color: "red"
};

Label.propTypes = {
  icon: PropTypes.node,
  value: PropTypes.string,
  color: PropTypes.string
};

export default Label;
