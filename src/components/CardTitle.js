import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Title = styled.Text`
  /* border-width: 1px; */
  font-size: 18;
  font-weight: 600;
  color: #1d262b;
  margin: 0px 0px 4px 0px;
`;

const CardTitle = ({ title }) => {
  return <Title numberOfLines={1}>{title}</Title>;
};

CardTitle.defaultProps = {
  title: "Project Title"
};

CardTitle.propTypes = {
  title: PropTypes.string
};

export default CardTitle;
