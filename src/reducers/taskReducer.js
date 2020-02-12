import {
  DRINK_COFFEE, 
  EAT_SNACK, 
  TAKE_NAP, 
  STUDY
} from '../actions/taskActions';

export default function reducer(state, action) {
  switch(action.type) {
    case DRINK_COFFEE:
      return { ...state, coffees: state.coffees + 1 };
    case EAT_SNACK:
      return { ...state, snacks: state.snacks + 1 };

    
    default: 
      return state; 
  }
}

