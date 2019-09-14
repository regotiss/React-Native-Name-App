import React from "react";
import { View, Text, StyleSheet } from "react-native";

const nameItem = (props) => (
  <View style={styles.listItem}>
    <Text>{props.title}</Text>
  </View>
);

const styles = StyleSheet.create({
  listItem: {
    marginVertical: 10,
    backgroundColor: "lightblue",
    padding: 10
  }
});
export default nameItem;
