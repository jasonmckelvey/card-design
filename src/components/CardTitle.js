import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Title = styled.Text`
  /* border-width: 1px; */
  font-size: 18;
  font-weight: 600;
`;

const CardTitle = ({ title }) => {
  return <Title>{title}</Title>;
};

CardTitle.defaultProps = {
  title: "Project Title"
};

CardTitle.propTypes = {
  title: PropTypes.string
};

export default CardTitle;
