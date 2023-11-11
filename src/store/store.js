import { configureStore } from '@reduxjs/toolkit';
import serviceEditReducer from '../reducers/serviceEditReducer';
import serviceListReducer from '../reducers/serviceListReducer';

const reducer = {
  serviceEdit: serviceEditReducer,
  serviceList: serviceListReducer,
};

export const store = configureStore({reducer});
