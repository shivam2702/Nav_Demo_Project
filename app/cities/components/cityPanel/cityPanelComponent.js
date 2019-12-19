import * as React from 'react';
import {View} from 'react-native';
import CityListComponent from '../cityList/cityListComponent';
import AddCityComponent from '../addCity/addCityComponent';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

const TabNavigator = createBottomTabNavigator({
  AddCity: {
    screen: AddCityComponent,
    navigationOptions: () => ({
      title: 'Add City',
    }),
  },
  CityList: {
    screen: CityListComponent,
    navigationOptions: () => ({
      title: 'City List',
    }),
  },
});

export default createAppContainer(TabNavigator);