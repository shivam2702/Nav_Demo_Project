import React, {Component} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import Styles from './addLocationComponent.styles';

class AddLocationComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {locationName: '', locationInfo: ''};
  }

  render() {
    return (
      <View style={Styles.mainContainer}>
        <TextInput
          style={Styles.textInput}
          placeholder="Location Name"
          placeholderTextColor="#FFFFFF"
          onChangeText={text => this.onLocationNameChange(text)}
          value={this.state.locationName}
        />
        <View style={Styles.sepeartor} />
        <TextInput
          style={Styles.textInput}
          placeholder="Location Info"
          placeholderTextColor="#FFFFFF"
          onChangeText={text => this.onLocationInfoChange(text)}
          value={this.state.locationInfo}
        />
        <View style={Styles.sepeartor} />
        <Button
          style={Styles.button}
          title="Add Location"
          onPress={() => this.onSubmit()}
        />
      </View>
    );
  }
  onLocationNameChange(text) {
    this.setState({locationName: text});
  }
  onLocationInfoChange(text) {
    this.setState({locationInfo: text});
  }
  onSubmit() {
    let location = {
      name: this.state.locationName,
      info: this.state.locationInfo,
    };
    this.props.onLocationAdd(location);
    this.state.locationName = '';
    this.state.locationInfo = '';
  }

  listItemSeparator = () => {
    return <View style={Styles.sepeartor} />;
  };
}

export default AddLocationComponent;
