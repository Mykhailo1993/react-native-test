import React, { useEffect, useState } from "react";
import {
  TextInput,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { Item } from "../components/Item";
import axios from "axios";
import { Context } from "../context";

const HomeScreen = ({ navigation }) => {
  const [countries, setCountries] = useState([]);
  const [filteredArray, setFilteredArray] = useState([]);
  const [searchText, setSearchText] = useState("");

  const [loading, setLoading] = useState(true);
  const getCountries = async () => {
    try {
      const response = await axios.get(
        "https://restcountries.eu/rest/v2/all?fields=name;population;capital"
      );
      setCountries(response.data);
      setFilteredArray(response.data);
      setLoading(false);
    } catch (error) {
      throw new Error(`Error: ${error.message}`);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => {
          setLoading(true);
          setSearchText(text);
          if (text.length <= 0) {
            setFilteredArray(countries);
          } else {
            const filteredArray = countries.filter((item) => {
              return item.name.includes(text);
            });
            setFilteredArray(filteredArray);
          }
          setLoading(false);
        }}
        value={searchText}
      />
      {loading && <ActivityIndicator size="large" />}
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.container}>
            {filteredArray.map((item, index) => {
              return (
                <Context.Provider
                  key={index}
                  value={{
                    name: item.name,
                    id: index,
                    capital: item.capital,
                    population: item.population,
                  }}
                >
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      navigation.navigate("Details", {
                        name: item.name,
                        id: index,
                        capital: item.capital,
                        population: item.population,
                      });
                    }}
                  >
                    <Item />
                  </TouchableOpacity>
                </Context.Provider>
              );
            })}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default HomeScreen;
