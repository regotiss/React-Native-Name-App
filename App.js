import React, { useState } from "react";
import { StyleSheet, TextInput, View, Button, Text, ScrollView } from "react-native";

export default function App() {
  const [name, setName] = useState("");
  const [names, setNames] = useState([]);

  const addName = () => {
    setNames(names => [...names, name]);
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
      <ScrollView>
        {names.map(name => (
          <View key={name} style={styles.listItem}>
            <Text>{name}</Text>
          </View>
        ))}
      </ScrollView>
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
  },
  listItem: {
    marginVertical: 10,
    backgroundColor: 'lightblue',
    padding: 10
  }
});
