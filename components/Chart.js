import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { color } from "react-native-reanimated";
import {ChartDot, ChartPath, ChartPathProvider, monotoneCubicInterpolation} from 'rainbow-me/animated-charts';

const Chart = ({
  currentPrice,
  logoUrl,
  name,
  symbol,
  pricePercentage7d,
  sparkline,
}) => {
    const priceChangeColor = pricePercentage7d > 0 ? '#34C759' : '#FF3B30' ; 
  return (
   <ChartPathProvider data={{points: sparkline, smoothingStrategy: 'bezier'}}>
     <View style={styles.chartWrapper}>
      <View style={styles.titlesWrapper}>
        <View style={styles.upperTitles}>
          <View style={styles.upperLeftTitle}>
            <Image source={{ uri: logoUrl }} style={styles.image} />
            <Text style={styles.subTitle}>
              {name} ({symbol})
            </Text>
          </View>
          <Text style={styles.subTitle}>7d</Text>
        </View>
        <View style={styles.lowerTitles}>
          <Text style={styles.boldTitle}>
            ${currentPrice.toLocaleString("en-US", { currency: "USD" })}
          </Text>
          <Text style={[styles.title, {color: priceChangeColor}]}>{pricePercentage7d.toFixed(2)}%</Text>
        </View>
      </View>
    </View>
   </ChartPathProvider>
  );
};

const styles = StyleSheet.create({
  chartWrapper: {
    margin: 16
  },
  titlesWrapper: {},
  upperTitles: {
    flexDirection: "row" ,
    justifyContent: "space-between",
    alignItems: "center"
  },
  upperLeftTitle: {
    flexDirection: 'row' ,
    alignItems: 'center',
    marginRight: 4, 
  },
  image: {
    width: 24 , 
    height: 24
  },
  subTitle: {
    fontSize: 14, 
    color: '#A9ABB1'
  },
  lowerTitles: {
    flexDirection: "row" ,
    justifyContent: "space-between",
    alignItems: "center"
  },
  boldTitle: {
    fontSize: 24, 
    color: '#000', 
    fontWeight:"bold"
  },
  title: {
    fontSize: 18 , 
  },
});

export default Chart;
