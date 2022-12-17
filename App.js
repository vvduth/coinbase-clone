import { StatusBar } from "expo-status-bar";
import { useRef, useMemo, useCallback, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ListItem from "./components/ListItem";
import { SAMPLE_DATA } from "./assets/dummyData/dummyData";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import Chart from "./components/Chart";

const ListHeader = () => (
  <>
    <View style={styles.titleWrapper}>
      <Text style={styles.largeTitle}>Markets</Text>
    </View>
    <View style={styles.divider} />
  </>
);
export default function App() {
  const [selectedCoinData, setSlectedCoinData] = useState(null);
  const bottomSheetModalRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ["50%"], []);

  const openModal = (item) => {
    setSlectedCoinData(item);
    // this comes from the doc
    bottomSheetModalRef.current.present();
  };

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
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
              onPress={() => openModal(item)}
            />
          )}
          ListHeaderComponent={<ListHeader />}
        />
        <StatusBar style="auto" />
      </View>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        style={styles.bottomSheet}
      >
        {selectedCoinData ? (
          <Chart
            currentPrice={selectedCoinData.current_price}
            logoUrl={selectedCoinData.image}
            name={selectedCoinData.name}
            pricePercentage7d={
              selectedCoinData.price_change_percentage_7d_in_currency
            }
            symbol = {selectedCoinData.symbol}
            sparkline={selectedCoinData.sparkline_in_7d}
          />
        ) : null}
      </BottomSheetModal>
    </BottomSheetModalProvider>
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
  bottomSheet: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
