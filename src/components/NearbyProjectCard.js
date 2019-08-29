import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Card from "./Card";
import ProjectCardImage from "./ProjectCardImage";
import CardHeader from "./CardHeader";
import CardLabels from "./CardLabels";

const Row = styled.View`
  flex-direction: row;
`;

const Content = styled.View`
  flex: 1;
`;

const NearbyProjectCard = () => {
  return (
    <Card>
      <Row>
        <ProjectCardImage
          height={"100%"}
          width={112}
          topLeft={4}
          bottomLeft={4}
        />
        <Content>
          <CardHeader
            title="McKelvey House Ahhhhhhhhhhhhhhhhhhhhhh"
            subtitle="6123 NW Gary St • Lincoln NE 68502222222222222222"
          />
          <CardLabels />
        </Content>
      </Row>
    </Card>
  );
};

NearbyProjectCard.propTypes = {};

export default NearbyProjectCard;
