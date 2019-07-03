import axios from 'axios';

import {
  SET_SEARCH_LIST,
  SET_BREWERY,
  SEARCH_ERROR,
  BREWERY_ERROR
} from './SearchTypes';

const SEARCH_URL = 'https://api.openbrewerydb.org/breweries/autocomplete?query=';
const BREWERY_URL = 'https://api.openbrewerydb.org/breweries/';

export const searchAllBreweries = ({ query }) => (dispatch) => {
  dispatch(_clearBrewery());
  axios.get(`${SEARCH_URL}${query}`)
    .then((res) => {
      dispatch({
        type: SET_SEARCH_LIST,
        payload: res.data
      });
    }).catch((err) => {
      // note: these error handlers aren't actually set up to do anything
      dispatch(_setSearchError(err));
    });
};

const _clearSearch = () => (dispatch) => {
  dispatch({
    type: SET_SEARCH_LIST,
    payload: []
  });
};

const _clearBrewery = () => (dispatch) => {
  dispatch({
    type: SET_BREWERY,
    payload: null
  });
};

const _setSearchError = error => (dispatch) => {
  dispatch({
    type: SEARCH_ERROR,
    payload: error
  });
};

const _setBreweryError = error => (dispatch) => {
  dispatch({
    type: BREWERY_ERROR,
    payload: error
  });
};

export const selectBrewery = ({ id }) => (dispatch) => {
  axios.get(`${BREWERY_URL}${id}`)
    .then((res) => {
      dispatch(_clearSearch());
      dispatch({
        type: SET_BREWERY,
        payload: res.data
      });
      console.log(`You Selected ${res.data.name} Good Choice!`);
    }).catch((err) => {
      dispatch(_setBreweryError(err));
    });
};
