import API from "Services/API";
import { call, put } from "redux-saga/effects";
import CustomerActions from "Redux/Actions/CustomerActions";

export function* getCustomer(action) {
  const response = yield call(API.customer.getCustomer);
  if (response.status === true) {
    yield put(CustomerActions.updateCustomer(response.data));
  }
}
