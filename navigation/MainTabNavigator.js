import { Icon } from 'expo'
import React from 'react'
import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation'
import TabBarIcon from '../components/TabBarIcon'
import HomeScreen from '../screens/HomeScreen'
import MessagesScreen from '../screens/MessagesScreen'
import ProfileScreen from '../screens/ProfileScreen'
import TopPicksScreen from '../screens/TopPicksScreen'
import ProfDetailScreen from '../screens/ProfileDetail'
import SearchScreen from '../screens/SearchScreen'

const HomeStack = createStackNavigator(
  {
    Home: { screen:HomeScreen },
    Detail: { screen:ProfDetailScreen },
  },
  {
    headerMode: 'none',
  },
  {
    initialRouteName: 'Home'
  }
)

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      Icon={Icon.MaterialCommunityIcons}
      focused={focused}
      name="fire"
    />
  ),
}

const TopPicksStack = createStackNavigator(
  {
    TopPicks: { screen:TopPicksScreen },
    Detail: { screen:ProfDetailScreen },
  },
  {
    headerMode: 'none',
  },
  {
    initialRouteName: 'TopPicks'
  }
)

TopPicksStack.navigationOptions = {
  tabBarLabel: 'TopPicks',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon Icon={Icon.FontAwesome} focused={focused} name="diamond" />
  ),
}

const MessagesStack = createStackNavigator(
  {
    Messages: MessagesScreen,
  },
  {
    headerMode: 'none',
  },
)

MessagesStack.navigationOptions = {
  tabBarLabel: 'Messages',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon Icon={Icon.FontAwesome} focused={focused} name="commenting-o" />
  ),
}

const SearchStack = createStackNavigator(
  {
    Search: { screen:SearchScreen },
    Detail: { screen:ProfDetailScreen },
  },
  {
    headerMode: 'none',
  },
  {
    initialRouteName: 'Search'
  }
)

SearchStack.navigationOptions = {
  tabBarLabel: 'Search',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon Icon={Icon.FontAwesome} focused={focused} name="search" />
  ),
}

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
  },
  {
    headerMode: 'none',
  },
)

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon Icon={Icon.Feather} focused={focused} name="user" />
  ),
}

export default createBottomTabNavigator({
  HomeStack,
  TopPicksStack,
  SearchStack,
  ProfileStack,
})
