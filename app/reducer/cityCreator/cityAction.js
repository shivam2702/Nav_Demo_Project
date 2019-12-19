export const ADD_NEW_CITY = 'ADD_NEW_CITY';
export const ADD_NEW_LOCATION = 'ADD_NEW_LOCATION';

export function addNewCity(data) {
  return {type: ADD_NEW_CITY, data};
}

export function addNewLocation(id, text) {
  let data = {cityId: id, data: text};
  return {type: ADD_NEW_LOCATION, data};
}
