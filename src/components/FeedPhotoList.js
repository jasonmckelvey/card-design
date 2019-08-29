import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import FeedPhoto from "./FeedPhoto";

const FeedPhotoList = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View
        style={{
          marginLeft: 16,
          flex: 1,
          flexDirection: "row",
          paddingVertical: 8
        }}
      >
        <FeedPhoto />
        <FeedPhoto />
        <FeedPhoto />
        <FeedPhoto />
        <FeedPhoto />
        <FeedPhoto />
        <FeedPhoto />
        <FeedPhoto />
      </View>
    </ScrollView>
  );
};

export default FeedPhotoList;
