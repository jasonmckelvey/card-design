import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.View`
  overflow: hidden;
`;

const Hero = styled.Image`
  flex: 1;
  background-color: #e0e4e6;
  overflow: hidden;
`;

const ProjectCardImage = ({
  children,
  height,
  width,
  topLeft,
  topRight,
  bottomLeft,
  bottomRight
}) => {
  return (
    <Container
      style={{
        height: height,
        width: width,
        borderTopLeftRadius: topLeft,
        borderTopRightRadius: topRight,
        borderBottomLeftRadius: bottomLeft,
        borderBottomRightRadius: bottomRight
      }}
    >
      <Hero>{children}</Hero>
    </Container>
  );
};

ProjectCardImage.propTypes = {
  children: PropTypes.node,
  height: PropTypes.string,
  width: PropTypes.number
};

ProjectCardImage.defaultProps = {
  height: {},
  width: {},
  topLeft: 0,
  topRight: 0,
  bottomLeft: 0,
  bottomRight: 0
};

export default ProjectCardImage;
