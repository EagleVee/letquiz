import { takeLatest } from "redux-saga/effects";
import { CustomerTypes } from "Redux/Actions/CustomerActions";
import { getCustomer } from "Sagas/CustomerSagas";

const mapCustomerSagas = [takeLatest(CustomerTypes.GET_CUSTOMER, getCustomer)];

export default mapCustomerSagas;
