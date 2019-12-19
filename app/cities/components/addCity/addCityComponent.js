import React, {Component} from 'react';
import {View, Text, TextInput, Button, Alert} from 'react-native';
import {connect} from 'react-redux';
import Styles from './addCityComponent.styles';
import {addNewCity, createCity} from '../../../reducer/cityCreator/cityAction';
import store from '../../../store';

class AddCityComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {city: '', country: ''};
  }

  render() {
    return (
      <View style={Styles.mainContainer}>
        <Text style={Styles.header}>Cities</Text>
        <TextInput
          style={Styles.textInput}
          placeholder="City"
          onChangeText={text => this.onCityChange(text)}
          value={this.state.city}
        />
        <TextInput
          style={Styles.textInput}
          placeholder="Country"
          onChangeText={text => this.onCountryChange(text)}
          value={this.state.country}
        />
        <Button
          buttonStyle={Styles.button}
          title="Add City"
          onPress={() => this.onSubmit()}
        />
      </View>
    );
  }
  onCityChange(text) {
    this.setState({city: text});
  }
  onCountryChange(text) {
    this.setState({country: text});
  }
  onSubmit() {
    let action = addNewCity({
      id: 5,
      name: this.state.city,
      country: this.state.country,
      locations: [],
    });
    this.props.dispatch(action);
    Alert.alert(this.state.city + ' has been added.');
    this.setState({city: ''});
    this.setState({country: ''});
  }
}

export default connect()(AddCityComponent);
