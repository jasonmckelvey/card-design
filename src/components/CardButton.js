import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.View`
  /* border-width: 1px;
  border-color: red; */
  flex-direction: row;
  align-items: center;
`;

const ButtonIcon = styled.View`
  background-color: blue;
  height: 20px;
  width: 20px;
  margin: 0px 4px 0px 0px;
`;

const ButtonText = styled.Text`
  font-size: 14px;
  font-weight: 600;
  /* border-width: 1; */
`;

const CardButton = ({ value }) => {
  return (
    <Container>
      <ButtonIcon />
      <ButtonText>{value}</ButtonText>
    </Container>
  );
};

CardButton.defaultProps = {
  value: "Button"
};

CardButton.propTypes = {
  value: PropTypes.string
};

export default CardButton;
