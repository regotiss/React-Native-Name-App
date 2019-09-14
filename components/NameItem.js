import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const nameItem = props => {
    const {item, onDelete} = props;
    return (
        <TouchableOpacity onPress={() => onDelete(props.item.id)}>
          <View style={styles.listItem}>
            <Text>{item.name}</Text>
          </View>
        </TouchableOpacity>
      );
};

const styles = StyleSheet.create({
  listItem: {
    marginVertical: 10,
    backgroundColor: "lightblue",
    padding: 10
  }
});
export default nameItem;
