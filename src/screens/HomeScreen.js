import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ProjectCardHome from "../components/ProjectCardHome";
import styled from "styled-components";

const styles = StyleSheet.create({});

const HomeScreen = () => {
  return (
    <View style={{ margin: 8 }}>
      <ProjectCardHome />
      <Text></Text>
    </View>
  );
};

export default HomeScreen;
