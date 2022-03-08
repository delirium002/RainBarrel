import axios from 'axios';

import {
  GET_AUDIENCE_DATA_REQUEST,
  GET_AUDIENCE_DATA_SUCCESS,
  GET_AUDIENCE_DATA_FAIL,
  GET_DEMO_AUTH_DATA_REQUEST,
  GET_DEMO_AUTH_DATA_SUCCESS,
  GET_DEMO_AUTH_DATA_FAIL,
} from './constant';

export const getAudienceData = () => async (dispatch) => {
  try {
    dispatch({ type: GET_AUDIENCE_DATA_REQUEST });

    const { data } = await axios.get(`${process.env.REACT_APP_SERVER_PORT}/audience`);

    dispatch({ type: GET_AUDIENCE_DATA_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: GET_AUDIENCE_DATA_FAIL,
      payload: err && err?.response?.data?.error,
    });
  }
};

export const getDemoAuthData = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_DEMO_AUTH_DATA_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${id}`,
      },
    };

    const { data } = await axios.get(`${process.env.REACT_APP_SERVER_PORT}/authdemo`, config);

    dispatch({ type: GET_DEMO_AUTH_DATA_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: GET_DEMO_AUTH_DATA_FAIL,
      payload: err && err?.response?.data?.error,
    });
  }
};
