import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const NameInput = props => {
  const [name, setName] = useState("");
  const { addName, show } = props;
  
  const onAdd = () => {
    addName(name)
    setName('');
  }

  return (
    <Modal visible={show}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} onChangeText={setName} value={name} />
        <Button title="ADD" onPress={onAdd} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    margin: 10
  },
  input: {
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  }
});

export default NameInput;
