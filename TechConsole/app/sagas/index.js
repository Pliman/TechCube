import { fork } from 'redux-saga/effects';

import tasks from './tasks';
import users from './users';
import techs from './techs';

export default function* root() {
  yield fork(tasks);
  yield fork(users);
  yield fork(techs);  
}
