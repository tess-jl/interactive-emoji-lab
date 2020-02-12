import { isTired, isHyper, isEducated, isHungry } from './moodSelectors'; 

describe('tests for mood selectors', () => {
  it('can select for isTired true', () => {
    const state = {
      coffees: 0, 
      naps: 0
    };
    const tired = isTired(state);

    expect(tired).toEqual(true);
  });
  it('can select for isTired false', () => {
    const state = {
      coffees: 1, 
      naps: 1
    };
    const tired = isTired(state);

    expect(tired).toEqual(false);
  });
  it('can select for isHyper', () => {
    const state = {
      coffees: 4
    };
    const hyper = isHyper(state);

    expect(hyper).toEqual(true);
  });
  it('can select for isHyper', () => {
    const state = {
      coffees: 3
    };
    const hyper = isHyper(state);

    expect(hyper).toEqual(false);
  });
  it('can select for isEducated', () => {
    const state = {
      studies: 3
    };
    const ed = isEducated(state);

    expect(ed).toEqual(true);
  });

});

