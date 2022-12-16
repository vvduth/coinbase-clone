import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ListItem from "./components/ListItem";
import { SAMPLE_DATA } from "./assets/dummyData/dummyData";
export default function App() {
  if (SAMPLE_DATA) {
    console.log(SAMPLE_DATA.length);
  }
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.largeTitle}>Markets</Text>
      </View>
      <View style={styles.divider} />
      <FlatList
        keyExtractor={(coin) => coin.id}
        data={SAMPLE_DATA}
        renderItem={({ item }) => (
          <ListItem
            name={item.name}
            key={item.id}
            symbol={item.symbol}
            currentPrice={item.current_price}
            pricePercentage7d={item.price_change_percentage_7d_in_currency}
            logoUrl={item.image}
          />
        )}
      />

      {/* {SAMPLE_DATA.map((coin) => (
        <ListItem
          name={coin.name}
          key={coin.id}
          symbol={coin.symbol}
          currentPrice={coin.current_price}
          pricePercentage7d={coin.price_change_percentage_7d_in_currency}
          logoUrl={coin.image}
        />
      ))} */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  titleWrapper: {
    marginTop: 80,
    paddingHorizontal: 16,
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#A9ABB1",
    marginHorizontal: 16,
    marginTop: 16,
  },
  largeTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
