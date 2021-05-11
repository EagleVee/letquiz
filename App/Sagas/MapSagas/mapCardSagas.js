import { takeLatest } from "redux-saga/effects";
import { CardTypes } from "Redux/Actions/CardActions";
import { doNothing } from "Sagas/CardSagas";

const mapCardSagas = [
  takeLatest(CardTypes.DO_NOTHING, doNothing),
];

export default mapCardSagas;
