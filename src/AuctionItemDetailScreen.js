import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, Text, Image, Dimensions } from 'react-native';

const AuctionItemDetailScreen = ({ navigation }) => {

    const auctionItem = navigation.getParam('auctionItem');
    const { width, height } = Dimensions.get('window');

    return(
        
        <View style={ styles.auctionItemContainer }>
            <Image source={{uri: auctionItem.item_img_url}} style={{ height: height * 0.3}} />
            <Text style={styles.auctionItemTitle} >{auctionItem.auction_title}</Text>
                <Text style={styles.auctionItemDesc} >{auctionItem.auction_desc}</Text>
        </View>
    )
} 

export default AuctionItemDetailScreen;

const styles = StyleSheet.create({
    auctionItemContainer: {
        flex: 1,
        paddingLeft: 5,
        paddingRight: 5 
    },
    auctionItemTitle: {
        fontSize: 24,
        fontWeight: '500',
        paddingTop: 5
    },
    auctionItemDesc: {
        fontSize: 16,
        paddingTop: 10,
        paddingBottom: 10
    },
})