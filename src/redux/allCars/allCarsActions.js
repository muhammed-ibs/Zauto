import axios from 'axios';

import actionTypes from '../../constants/actionTypes';

// import { API_URL } from '../../config';


// Getting allCars in massive form
export const getAllCars = () => (dispatch) => {
  dispatch({
    type: actionTypes.GET_ALL_CARS,
    payload: axios({
      method: 'GET',
      url: `https://admin.zauto.uz/api/cars`
    })
  })
};
