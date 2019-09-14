import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import NameInput from "./components/NameInput";
import NameItem from "./components/NameItem";

export default function App() {
  const [names, setNames] = useState([]);

  const addName = name => {
    setNames(names => [
      ...names,
      {
        id: names.length.toString(),
        name
      }
    ]);
  };

  const deleteName = nameId => {
    setNames(names => names.filter(name => name.id !== nameId));
  };

  return (
    <View style={styles.screen}>
      <NameInput addName={addName} />
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
