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

  it('creates an eat snack action', () => {
    const action = eatSnack();

    expect(action).toEqual({
      type: EAT_SNACK
    });
  });

  it('creates a take nap action', () => {
    const action = takeNap();

    expect(action).toEqual({
      type: TAKE_NAP
    });
  });



});

