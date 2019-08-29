import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Card from "./Card";
import ProjectCardImage from "./ProjectCardImage";
import CardHeader from "./CardHeader";
import CardLabels from "./CardLabels";
import CardActions from "./CardActions";

const Divider = styled.View`
  height: 1px;
  width: 100%;
  background-color: #e0e4e6;
`;

const HeroWrapper = styled.View`
  height: 150px;
`;

const HomeProjectCard = () => {
  return (
    <Card width={280}>
      <HeroWrapper>
        <ProjectCardImage
          topRight={4}
          topLeft={4}
          height={"100%"}
          width={280}
        />
      </HeroWrapper>
      <CardHeader
        title="McKelvey House Ahhhhhhhhhhhhhhhhhhhhhh"
        subtitle="6123 NW Gary St • Lincoln NE 68502222222222222222"
      />
      <CardLabels />
      <Divider />
      <CardActions />
    </Card>
  );
};

HomeProjectCard.propTypes = {};

export default HomeProjectCard;
