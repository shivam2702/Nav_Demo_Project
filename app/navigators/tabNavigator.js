import AddCityComponent from '../cities/components/addCity/addCityComponent';
import CityListComponent from '../cities/components/cityList/cityListComponent';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import CityNavigator from './cityNavigator';

const TabNavigator = createBottomTabNavigator({
  AddCity: {
    screen: AddCityComponent,
    navigationOptions: () => ({
      title: 'Add City',
    }),
  },
  CityList: {
    screen: CityNavigator,
    navigationOptions: () => ({
      title: 'City List',
    }),
  },
});

export default createAppContainer(TabNavigator);
