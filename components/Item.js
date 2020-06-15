import React, { useContext } from "react";
import { View, Text } from "react-native";
import { Context } from "../context";

export const Item = () => {
  const country = useContext(Context);
  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: "black",
        flexDirection: "row",
      }}
    >
      <View style={{ flex: 1 }}>
        <Text>
          {country.id + 1}.{country.name}
        </Text>
        <Text>Столиця{country.capital}</Text>
        <Text>Населення{country.population}</Text>
      </View>
    </View>
  );
};
