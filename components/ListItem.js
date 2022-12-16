import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'

const ListItem = ({name, symbol, currentPrice, pricePercentage7d, logoUrl }) => {
    const priceChangeColor = pricePercentage7d > 0 ? '#34C759' : '#FF3B30' ; 
    return (
    <TouchableOpacity>
      <View style={styles.itemWrapper}>
        {/* left side */}
        <View style ={styles.leftWrapper}>
            <Image style= {styles.image} source={{uri: logoUrl}}/>
            <View style={styles.titlesWrapper}>
                <Text style={styles.title}>
                    {name}
                </Text>
                <Text style={styles.subTitle}>
                    {symbol.toUpperCase()}
                </Text>
            </View>
        </View>

        {/* right side */}
        <View styles ={styles.rightWrapper}>
                <Text style={[styles.title, {alignSelf: 'flex-end'}]}>
                    $ {currentPrice.toLocaleString('en-US', {currency: 'USD'})}
                </Text>
                <Text style={[styles.subTitle, {alignSelf: 'flex-end'},{color: priceChangeColor}]}>
                    {pricePercentage7d.toFixed(2)} %
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
        alignItems : 'flex-end'
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