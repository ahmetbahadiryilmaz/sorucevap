import { IGNELE,ARAMA_GECMISI_SORGULA } from '../actions/types';

const INITIAL_STATE = {
  ignele:0,
  aramaGecmisiFonk:0
};
export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
        case IGNELE:
        return { ...state, ignele:action.payload };
    case ARAMA_GECMISI_SORGULA:
    return { ...state, aramaGecmisiFonk:action.payload };
  default:
      return state;
  }
};
