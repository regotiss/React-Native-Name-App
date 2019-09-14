import React from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="name"
          style={{ borderBottomColor: "black", flex:1, margin: 10, borderBottomWidth: 1 }}
        />
        <Button title="ADD" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});
