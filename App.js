import 'react-native-gesture-handler';
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import AuctionListScreen from "./src/AuctionListScreen"
import AuctionItemDetailScreen from "./src/AuctionItemDetailScreen"
import AuthScreen from "./src/AuthScreen"

const { createStackNavigator } = require("react-navigation-stack");

const AppNavigator = createStackNavigator({
  Home: {
    screen: AuctionListScreen,
  },
  AuctionDetail: {
    screen: AuctionItemDetailScreen,  
  }
},{
  defaultNavigationOptions: {
    title: 'CenticBids',
    headerStyle:{
      backgroundColor:'#673AB7',

    },
    headerTintColor: '#ffffff',
    headerTitleStyle: {
        color: '#ffffff'
    }

    }
})

const AuthNavigator = createStackNavigator({
  LoginRoute: {
    screen: AuthScreen,
    navigationOptions: () => ({
      headerShown: false
    })
  }
});


const AppContainer = createSwitchNavigator(
  {
    App: AppNavigator,
    Auth: AuthNavigator
  },
  {
    initialRouteName: 'Auth',
  }
);

export default createAppContainer(AppContainer);