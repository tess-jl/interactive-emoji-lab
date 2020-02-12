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
  it('can select for isHyper true', () => {
    const state = {
      coffees: 4
    };
    const hyper = isHyper(state);

    expect(hyper).toEqual(true);
  });
  it('can select for isHyper false', () => {
    const state = {
      coffees: 3
    };
    const hyper = isHyper(state);

    expect(hyper).toEqual(false);
  });
  it('can select for isEducated true', () => {
    const state = {
      studies: 3
    };
    const ed = isEducated(state);

    expect(ed).toEqual(true);
  });
  it('can select for isEducated false', () => {
    const state = {
      studies: 2
    };
    const ed = isEducated(state);

    expect(ed).toEqual(false);
  });
  it('can select for isHungry true', () => {
    const state = {
      snacks: 0
    };
    const hunger = isHungry(state);

    expect(hunger).toEqual(true);
  });
  it('can select for isHungry false', () => {
    const state = {
      studies: 1
    };
    const hunger = isHungry(state);

    expect(hunger).toEqual(false);
  });
});

