import CityListComponent from '../cities/components/cityList/cityListComponent';
import LocationPanelComponent from '../cities/components/locationPanel/locationPanelComponent';
import {getName} from '../cities/components/locationPanel/locationPanelComponent';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const CityStackNavigator = createStackNavigator(
  {
    CityList: {
      screen: CityListComponent,
      navigationOptions: () => ({
        title: 'City List',
      }),
    },
    LocationPanel: {
      screen: LocationPanelComponent,
    },

    CityListComponent,
    LocationPanelComponent,
  },
  {
    initialRouteName: 'CityListComponent',
  },
);

export default createAppContainer(CityStackNavigator);
