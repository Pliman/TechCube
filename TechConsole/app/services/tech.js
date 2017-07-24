import * as Fetch from '../utils/fetch';

import { GET_TECHS } from '../constants/api';

const TechService = {
  getTechs() {
    return Fetch.get(GET_TECHS);
  }
};

export default TechService;
