import React, { PureComponent} from 'react';
import { StyleSheet, View, Text, Image, Dimensions  } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { color } from 'react-native-reanimated';


export default class AuctionListItem extends PureComponent {
  
  render(){

    const { width, height } = Dimensions.get('window');

    const auctionItem = this.props.auctionItem;

    return (
        <Card style={styles.card}>
            <View style={styles.auctionItem} >
                <Image source={{uri: auctionItem.item_img_url}} style={{ height: height * 0.3}} />
                <Text style={styles.auctionItemTitle} >{auctionItem.auction_title}</Text>
                <Text style={styles.auctionItemDesc} numberOfLines={3} ellipsizeMode='tail'>{auctionItem.auction_desc}</Text>
                <Text style={styles.auctionItemStats} >{ 'Remaining Time : ' + auctionItem.auction_remaining_time}</Text>
                <Text style={styles.auctionItemStats} >{ 'Highest Bid : ' + auctionItem.latest_bid}</Text>
                <Text style={styles.auctionItemStats} >{ 'Base Price: ' + auctionItem.base_price}</Text>
                <View style={{ paddingTop: 10, flexDirection: 'row', justifyContent: 'flex-end'}}>
                    <Button title="BID NOW" onPress={ () => {this.props.goToAuctionDetailScreen(this.props.auctionItem) } } buttonStyle={{ width: 120, backgroundColor: '#673AB7'}}/>
                </View>
                
            </View>
        </Card>
    )

  }


}

const styles = StyleSheet.create({
    auctionItem: {
        flex: 1,
        padding: 10
    },
    auctionItemTitle: {
        fontSize: 20,
        fontWeight: '500',
        paddingTop: 5
    },
    auctionItemDesc: {
        fontSize: 14,
        paddingTop: 10,
        paddingBottom: 10
    },
    auctionItemStats: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    card: {
        backgroundColor: '#ddd',
        padding: 10,
        marginVertical: 10,
        borderRadius: 10,
        justifyContent: 'center',
      },
})