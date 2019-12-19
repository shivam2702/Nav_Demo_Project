import {ADD_NEW_CITY, ADD_NEW_LOCATION} from './cityCreator/cityAction';

const cityReducer = function(state, action) {
  switch (action.type) {
    case ADD_NEW_CITY: {
      let cities = [...state.cities];
      cities.push(action.data);
      let newState = {...state, cities: cities};
      return newState;
    }
    case ADD_NEW_LOCATION: {
      let cityId = action.data.cityId;
      let cities = [...state.cities]
      let city = cities.find(c=> c.id === cityId)
      city.locations.push(action.data.data)
      let newState = {...state, cities: cities};
      return newState;
    }
    default:
      return state;
  }
};
export default cityReducer;
