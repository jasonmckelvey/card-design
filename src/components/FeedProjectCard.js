import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Card from "./Card";
import CardHeader from "./CardHeader";
import CardLabels from "./CardLabels";
import CardActions from "./CardActions";
import FeedPhotoList from "./FeedPhotoList";

const Divider = styled.View`
  height: 1px;
  width: 100%;
  background-color: #e0e4e6;
`;

const FeedProjectCard = () => {
  return (
    <Card>
      <CardHeader
        title="McKelvey House Ahhhhhhhhhhhhhhhhhhhhhh"
        subtitle="6123 NW Gary St • Lincoln NE 68502222222222222222"
      />
      <CardLabels />
      <Divider />
      <FeedPhotoList />
      <Divider />
      <CardActions />
    </Card>
  );
};

FeedProjectCard.propTypes = {};

export default FeedProjectCard;
