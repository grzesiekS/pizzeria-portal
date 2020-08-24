import Axios from 'axios';
import { api } from '../settings';

/* selectors */
export const getAllOrders = ({order}) => order.data;

/* action name creator */
const reducerName = 'order';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const FETCH_FILTERED_ORDER = createActionName('FETCH_FILTERED_ORDER');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS});
export const fetchError = payload => ({ payload, type: FETCH_ERROR});
export const fetchFilteredOrder = payload => ({ payload, type: FETCH_FILTERED_ORDER });

/* thunk creators */
export const fetchOrderFromAPI = () => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());

    Axios
      .get(`${api.url}/${api.order}`)
      .then(res => {
        dispatch(fetchSuccess(res.data));
      })
      .catch(err =>{
        dispatch(fetchError(err.message || true));
      });
  };
};

export const fetchFilteredOrderFromAPI = orderId => {
  return(dispatch, getState) => {
    dispatch(fetchStarted());

    Axios
      .get(`${api.url}/${api.order}`)
      .then(res => {
        dispatch(fetchFilteredOrder(res.data.filter(dataPart => dataPart.id === orderId)));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  };
};

/* reducer */
export default function reducer(statePart = [], action = []) {
  switch(action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    case FETCH_FILTERED_ORDER: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    default:
      return statePart;
  }
}
