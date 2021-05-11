import { takeLatest } from "redux-saga/effects";
import { ContentTypes } from "Redux/Actions/ContentActions";
import { getLanguages } from "Sagas/ContentSagas";

const mapContentSagas = [takeLatest(ContentTypes.GET_LANGUAGES, getLanguages)];

export default mapContentSagas;
