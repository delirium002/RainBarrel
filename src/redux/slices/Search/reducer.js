import { GET_SEARCH_DATA_REQUEST, GET_SEARCH_DATA_SUCCESS, GET_SEARCH_DATA_FAIL } from './constant';

export const getSearchDataReducer = (state = { loading: false, searchData: {} }, action) => {
  switch (action.type) {
    case GET_SEARCH_DATA_REQUEST:
      return { ...state, loading: true };
    case GET_SEARCH_DATA_SUCCESS:
      return { loading: false, searchData: action.payload };
    case GET_SEARCH_DATA_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
