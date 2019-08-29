import React from "react";
import { View, Text, StyleSheet } from "react-native";
import HomeProjectCard from "../components/HomeProjectCard";
import NearbyProjectCard from "../components/NearbyProjectCard";

import styled from "styled-components";

const Spacer = styled.View`
  height: 24px;
`;

const HomeScreen = () => {
  return (
    <View style={{ margin: 8 }}>
      <HomeProjectCard />
      <Spacer />
      <NearbyProjectCard />
      <Text></Text>
    </View>
  );
};

export default HomeScreen;
