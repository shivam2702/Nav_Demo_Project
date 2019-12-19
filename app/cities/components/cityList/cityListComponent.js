import React, {Component} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {Styles} from './cityListComponent.styles';
import {defaultCity} from '../../dataModel/city';
import store from '../../../store';
import {connect} from 'react-redux';

class CityListComponent extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({navigation}) => ({
    title: 'City List',
  });

  render() {
    onCitySelect = (id, name) => {
      this.props.navigation.navigate('LocationPanel', {
        id: id,
        name: name,
      });
    };

    return (
      <View>
        <FlatList
          data={this.props.cities}
          ItemSeparatorComponent={listItemSeparator}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => <Item data={item} />}
        />
      </View>
    );
  }
}
listItemSeparator = () => {
  return <View style={Styles.sepeartor} />;
};

function Item({data}) {
  return (
    <TouchableOpacity
      onPress={() => this.onCitySelect(data.id, data.name)}
      style={Styles.container}>
      <Text style={Styles.name}>{data.name}</Text>
      <Text style={Styles.description}>{data.country}</Text>
    </TouchableOpacity>
  );
}

function mapStateToProps(state) {
  return {
    cities: state.cities,
  };
}

export default connect(mapStateToProps)(CityListComponent);
