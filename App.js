import React, { useState } from "react";
import { StyleSheet, TextInput, View, Button, Text } from "react-native";

export default function App() {
  const [name, setName] = useState("");
  const [names, setNames] = useState([]);

  const addName = () => {
    setNames(names => [...names, name]);
    setName('');
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="name"
          style={styles.input}
          onChangeText={setName}
          value={name}
        />
        <Button title="ADD" onPress={addName} />
      </View>
      <View>
        {names.map(name => (
          <Text key={name}>{name}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
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
