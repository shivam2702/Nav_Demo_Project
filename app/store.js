import {createStore} from 'redux';
import cityReducer from './reducer/cityReducer';
import {defaultCity} from './cities/dataModel/city'

const store = createStore(cityReducer, {cities: defaultCity});
export default store;
