import axios from 'axios';
import { GET_SEARCH_DATA_REQUEST, GET_SEARCH_DATA_SUCCESS, GET_SEARCH_DATA_FAIL } from './constant';

export const getSearchData = () => async (dispatch) => {
  try {
    dispatch({ type: GET_SEARCH_DATA_REQUEST });

    const { data } = await axios.get(`${process.env.REACT_APP_SERVER_PORT}/searchData`);

    dispatch({ type: GET_SEARCH_DATA_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: GET_SEARCH_DATA_FAIL,
      payload: err && err?.response?.data?.error,
    });
  }
};
