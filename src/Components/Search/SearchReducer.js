import {
  SET_SEARCH_LIST,
  SET_BREWERY,
  SEARCH_ERROR,
  BREWERY_ERROR
} from "./SearchTypes";

const INITIAL_STATE = {
  searchSuggestions: [],
  selectedBrewery: null,
  searchError: null,
  breweryError: null
};

export default function AuthReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_SEARCH_LIST:
      return {
        ...state,
        searchSuggestions: action.payload
      };
    case SET_BREWERY:
      return {
        ...state,
        selectedBrewery: action.payload
      };
    case SEARCH_ERROR:
      return {
        ...state,
        searchError: action.payload
      };
    case BREWERY_ERROR:
      return {
        ...state,
        breweryError: action.payload
      };
    default:
      return state;
  }
}
