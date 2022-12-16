import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'

const ListItem = ({name, symbol, currentPrice, pricePercentage7d, logoUrl }) => {
  return (
    <TouchableOpacity>
      <View style={styles.itemWrapper}>
        {/* left side */}
        <View style ={styles.leftWrapper}>
            <Image style= {styles.image} source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Eth-diamond-rainbow.png'}}/>
            <View style={styles.titlesWrapper}>
                <Text style={styles.title}>
                    Etherum
                </Text>
                <Text style={styles.subTitle}>
                    ETH
                </Text>
            </View>
        </View>

        {/* right side */}
        <View styles ={styles.rightWrapper}>
                <Text style={styles.title}>
                    1200
                </Text>
                <Text style={[styles.subTitle, {color: 'red'}]}>
                    ETH
                </Text>
        </View>

      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    itemWrapper:{
        paddingHorizontal: 16,
        marginTop: 24 ,
        flexDirection: "row" , // make it in a row left and right ,
        justifyContent: "space-between"
    },
    leftWrapper: {
        flexDirection: "row" ,
        alignItems: "center" ,
    },
    rightWrapper: {
        alignItems: 'flex-end'
    },
    titlesWrapper: {
        marginLeft: 8 
    },
    image : {
        height: 48 , 
        width: 48
    } ,
    title: {
        fontSize: 18 ,
        
    }, 
    subTitle: {
        fontSize: 14,
        color: "A9ABB1",
        marginTop:4, 
    }, 
    

})
export default ListItem