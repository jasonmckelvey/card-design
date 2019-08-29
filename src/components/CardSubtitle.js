import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

//  TODO: change to companycam-colors

const SubTitle = styled.Text`
  /* border-width: 1px; */
  font-size: 14;
  color: #1d262b;
`;

const CardSubTitle = ({ subtitle }) => {
  return <SubTitle numberOfLines={1}>{subtitle}</SubTitle>;
};

CardSubTitle.defaultProps = {
  subtitle: "Project Address"
};

CardSubTitle.propTypes = {
  subtitle: PropTypes.string
};

export default CardSubTitle;
