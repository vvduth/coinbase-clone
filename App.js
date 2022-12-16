import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style = {styles.titleWrapper}>
        <Text style={styles.largeTitle}>Markets</Text>
      </View>
      <View style ={styles.divider}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleWrapper: {
    marginTop: 80,
    paddingHorizontal: 16 , 
  },
  divider: {
    height: StyleSheet.hairlineWidth ,
    backgroundColor: '#A9ABB1',
    marginHorizontal: 16, 
    marginTop: 16, 
  },
  largeTitle: {
    fontSize: 24, 
    fontWeight: "bold" , 
  }
});
