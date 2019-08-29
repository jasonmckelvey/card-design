import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import HomeProjectCard from "../components/HomeProjectCard";
import NearbyProjectCard from "../components/NearbyProjectCard";
import FeedProjectCard from "../components/FeedProjectCard";

import styled from "styled-components";

const Spacer = styled.View`
  height: 24px;
`;

const HomeScreen = () => {
  return (
    <ScrollView>
      <View style={{ flex: 1, padding: 16 }}>
        <HomeProjectCard />
        <Spacer />
        <NearbyProjectCard />
        <Spacer />
        <FeedProjectCard />
        <Spacer />
        <Spacer />
        <Spacer />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
