import {
  GET_DASHBOARD_DATA_REQUEST,
  GET_DASHBOARD_DATA_SUCCESS,
  GET_DASHBOARD_DATA_FAIL,
  GET_DEMO_AUTH_DATA_REQUEST,
  GET_DEMO_AUTH_DATA_SUCCESS,
  GET_DEMO_AUTH_DATA_FAIL,
} from './constant';

export const getDashboardDataReducer = (state = { dashboard: {} }, action) => {
  switch (action.type) {
    case GET_DASHBOARD_DATA_REQUEST:
      return { ...state, loading: true };
    case GET_DASHBOARD_DATA_SUCCESS:
      return { loading: false, dashboard: action.payload };
    case GET_DASHBOARD_DATA_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getDemoAuthDataReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_DEMO_AUTH_DATA_REQUEST:
      return { ...state, loading: true };
    case GET_DEMO_AUTH_DATA_SUCCESS:
      return { loading: false, authData: action.payload };
    case GET_DEMO_AUTH_DATA_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
