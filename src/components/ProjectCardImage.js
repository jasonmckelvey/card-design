import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.View`
  overflow: hidden;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

const Hero = styled.Image`
  height: 159px;
  width: 280px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  background-color: #b0b7bb;
  overflow: hidden;
`;

const ProjectCardImage = ({ children }) => {
  return (
    <Container>
      <Hero>{children}</Hero>
    </Container>
  );
};

ProjectCardImage.propTypes = {
  children: PropTypes.node
};

export default ProjectCardImage;
