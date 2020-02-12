import { isTired, isHyper, isEducated, isHungry } from './moodSelectors'; 

describe('tests for mood selectors', () => {
  it('can select for isTired', () => {
    const state = {
      coffees: 0, 
      naps: 0
    };
    const tired = isTired(state);

    expect(tired).toEqual(true);
  });

});

