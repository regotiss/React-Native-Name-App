import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
const nameInput = (props) => {
  const [name, setName] = useState("");
  const { addName } = props;

  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.input} onChangeText={setName} value={name} />
      <Button title="ADD" onPress={() => addName(name)} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  input: {
    borderBottomColor: "black",
    flex: 1,
    margin: 10,
    borderBottomWidth: 1
  }
});
export default nameInput;
