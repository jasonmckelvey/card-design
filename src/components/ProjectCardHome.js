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

const ProjectCardHome = ({ children }) => {
  return (
    <Card>
      <ProjectCardImage />
      <CardHeader
        title="McKelvey House"
        subtitle="6123 NW Gary St Lincoln NE 68502"
      />
      <CardLabels />
      <Divider />
      <CardActions />
    </Card>
  );
};

ProjectCardHome.propTypes = {
  children: PropTypes.node
};

export default ProjectCardHome;
