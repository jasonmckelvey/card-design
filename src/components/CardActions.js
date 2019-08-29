import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import CardButton from "./CardButton";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

const ShareIcon = (
  <MaterialCommunityIcons name="telegram" size={20} color="#1d262b" />
);

const PhotoIcon = <MaterialIcons name="camera-alt" size={20} color="#1d262b" />;

const MenuIcon = <MaterialIcons name="menu" size={20} color="#1d262b" />;

const Container = styled.View`
  padding: 16px;
  /* border-width: 1px;
  border-color: red; */
  flex-direction: row;
  justify-content: space-between;
`;

const CardLabels = () => {
  return (
    <Container>
      <CardButton icon={ShareIcon} value="Share" />
      <CardButton icon={PhotoIcon} value="Photo" />
      <CardButton icon={MenuIcon} value="More" />
    </Container>
  );
};

CardLabels.propTypes = {};

export default CardLabels;
