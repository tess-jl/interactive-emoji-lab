import { 
  DRINK_COFFEE, 
  drinkCoffee, 
  EAT_SNACK, 
  eatSnack, 
  TAKE_NAP, 
  takeNap, 
  STUDY, 
  study 
} from './moodActions';

describe('mood actions', () => {
  it('creates a drink coffee action', () => {
    const action = drinkCoffee();

    expect(action).toEqual({
      type: DRINK_COFFEE
    });
  });


});

