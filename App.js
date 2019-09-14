import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";
import NameInput from "./components/NameInput";
import NameItem from "./components/NameItem";

export default function App() {
  const [names, setNames] = useState([]);
  const [addMode, setAddMode] = useState(false);

  const addName = name => {
    setNames(names => [
      ...names,
      {
        id: names.length.toString(),
        name
      }
    ]);
    setAddMode(false);
  };

  const deleteName = nameId => {
    setNames(names => names.filter(name => name.id !== nameId));
  };

  return (
    <View style={styles.screen}>
      <Button title="Add Name" onPress={() => setAddMode(true)}/>
      <NameInput show={addMode} onCancel={() => setAddMode(false)} addName={addName} />
      <View>
        <FlatList
          data={names}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <NameItem onDelete={deleteName} item={item} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
