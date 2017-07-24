import { GET_TECHS } from '../constants/actionType';
import { createReducer } from '../utils/createReducer';

const initialState = {
  list: []
};

export default createReducer(initialState, {
  [GET_TECHS.SUCCESS]: (state, payload) => {
    return {
      ...state,
      list: payload.techs
    };
  }
});
