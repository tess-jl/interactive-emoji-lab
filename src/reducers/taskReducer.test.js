import reducer from './taskReducer';
import { drinkCoffee, eatSnack, takeNap, study } from '../actions/taskActions';

describe('mood reducer tests', () => {
  it('handles the DRINK_COFFEE action', () => {
    const action = drinkCoffee();
    const initialState = { coffees: 1 };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({ coffees: 2 });
  });
  it('handles the EAT_SNACK action', () => {
    const action = eatSnack();
    const initialState = { snacks: 1 };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({ snacks: 2 });
  });





  it('handles the action it does not understand gracefully', () => {
    const action = { type: 'WRITE_CODE' };
    const initialState = { coffees: 1 };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({ coffees: 1 });
  });

});
