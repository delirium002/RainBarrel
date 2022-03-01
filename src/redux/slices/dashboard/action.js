import axios from 'axios';
import { GET_DASHBOARD_DATA_REQUEST, GET_DASHBOARD_DATA_SUCCESS, GET_DASHBOARD_DATA_FAIL } from './constant';

export const getDashboardData = () => async (dispatch) => {
  try {
    dispatch({ type: GET_DASHBOARD_DATA_REQUEST });

    // const { data } = await axios.get(`${process.env.REACT_APP_SERVER_PORT}/dashboard`);

    const { data } = await axios.get(`https://api.mocki.io/v2/923e1e4a/dashboard`);

    dispatch({ type: GET_DASHBOARD_DATA_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: GET_DASHBOARD_DATA_FAIL,
      payload: err && err?.response?.data?.error,
    });
  }
};
