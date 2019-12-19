import React, {Component} from 'react';
import {View, FlatList, Text} from 'react-native';
import AddLocationComponent from '../addLocation/addLocationComponent';
import {defaultCity} from '../../dataModel/city';
import {Styles} from './locationPanelComponent.styles';
import {connect} from 'react-redux';
import {addNewLocation} from '../../../reducer/cityCreator/cityAction';

class LocationPanelComponent extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.name,
  });

  render() {
    const {navigation} = this.props;
    const city = this.props.cities.find(
      c => c.id === navigation.getParam('id', 0),
    );

    return (
      <View style={Styles.mainContainer}>
        <View style={Styles.listContainer}>
          <FlatList
            data={city.locations}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={listItemSeparator}
            renderItem={({item}) => <Item name={item.name} info={item.info} />}
          />
        </View>
        <AddLocationComponent
          style={Styles.addContainer}
          onLocationAdd={location => {
            this.props.dispatch(
              addNewLocation(navigation.getParam('id', 0), location),
            );
          }}></AddLocationComponent>
      </View>
    );
  }
}

listItemSeparator = () => {
  return <View style={Styles.sepeartor} />;
};

function Item({name, info}) {
  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>{name}</Text>
      <Text style={Styles.description}>{info}</Text>
    </View>
  );
}

function mapStateToProps(state) {
  return {
    cities: state.cities,
  };
}

export default connect(mapStateToProps)(LocationPanelComponent);
