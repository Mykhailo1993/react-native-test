import React from "react";
import { Text, View, StyleSheet } from "react-native";

const DetailScreen = ({ route }) => {
  const { name, capital, population } = route.params;
  return (
    <View style={styles.content}>
      <Text style={{ fontSize: 20 }}>Країна:{name}</Text>
      <Text>Столиця:{capital}</Text>
      <Text>Населення:{population}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    marginTop: 10,
    fontSize: 29,
  },
});

export default DetailScreen;
