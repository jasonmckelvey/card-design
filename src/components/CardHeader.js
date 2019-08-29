import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import CardSubTitle from "./CardSubtitle";
import CardTitle from "./CardTitle";

const Container = styled.View`
  padding: 16px;
  /* border-width: 1px;
  border-color: red; */
`;

const CardHeader = ({ title, subtitle }) => {
  return (
    <Container>
      <CardTitle title={title} />
      <CardSubTitle subtitle={subtitle} />
    </Container>
  );
};

CardHeader.propTypes = {};

export default CardHeader;
