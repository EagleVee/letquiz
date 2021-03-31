import { takeLatest } from "redux-saga/effects";
import { ContentTypes } from "Redux/Actions/ContentActions";
import { getFaqs } from "Sagas/ContentSagas";

const mapContentSagas = [takeLatest(ContentTypes.GET_FAQS, getFaqs)];

export default mapContentSagas;
