
import React, { useState, useEffect } from 'react';
import { View, FlatList, Button } from 'react-native';
import { getAllActiveAuctions, signout } from '../src/firebase-service/CenticBidsApi';
import AuctionListItem from '../src/auctionListItem';

const AuctionListScreen = ({ navigation }) => {

    const [auctionItems, setAuctionItems] = useState([{}]);

    useEffect(() => {
    
        getAllActiveAuctions(auctionsItemsRetrieved)
    
    }, []);

    auctionsItemsRetrieved = (auctionItemsList) => {

        setAuctionItems(auctionItemsList)
        console.log(auctionItems)

    }

    const goToAuctionDetailScreen = (item) => {
        navigation.navigate('AuctionDetail', { auctionItem: item})
    }

    return(
        <View>
            <FlatList 
                //converts object to array
                data = {auctionItems}
                keyExtractor={(item, index) => {
                    return 'doggo' + index;
                }}
                renderItem = {({item}) => {
                    return(
                    <AuctionListItem auctionItem = {item} goToAuctionDetailScreen= { goToAuctionDetailScreen }/>
                    ) 
                }}
            />
        </View>
    )
} 
AuctionListScreen.navigationOptions = ({ navigation }) => ({

    headerRightContainerStyle: {
      paddingRight: 10
    },
    headerRight: (
        <Button title='log out' onPress={ () => { signout( () => { navigation.navigate('Auth') } ) }}/>
    )
});

export default AuctionListScreen;