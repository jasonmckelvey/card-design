import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SubTitle = styled.Text`
  /* border-width: 1px; */
`;

const CardSubTitle = ({ subtitle }) => {
  return <SubTitle>{subtitle}</SubTitle>;
};

CardSubTitle.defaultProps = {
  subtitle: "Project Address"
};

CardSubTitle.propTypes = {
  subtitle: PropTypes.string
};

export default CardSubTitle;
