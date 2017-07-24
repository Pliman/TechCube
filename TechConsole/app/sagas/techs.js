import { takeEvery, put, call, fork } from 'redux-saga/effects';

import { GET_TECHS } from '../constants/actionType';
import TechService from '../services/tech';

export function* getTechs() {
  try {
    const [ techs ] = yield [
      call(TechService.getTechs)
    ];

    yield put({
      type: GET_TECHS.SUCCESS,
      payload: {
        techs: techs.result
      }
    });
  } catch (err) {
    yield put({ type: GET_TECHS.FAILED });
  }
}

export function* watchGetTechs() {
  console.log('tech========');
  yield takeEvery(GET_TECHS.ACTION, getTechs);
}

export default function* techs() {
  yield fork(watchGetTechs);
}
