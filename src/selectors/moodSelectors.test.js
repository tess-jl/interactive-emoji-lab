import { isTired, isHyper, isEducated, isHungry, getFace } from './moodSelectors'; 

describe('tests for mood selectors', () => {
  it('can select for isTired true and return correct tired face emoji', () => {
    const state = {
      coffees: 0, 
      naps: 0
    };
    const tired = isTired(state);
    const tiredFace = getFace(state);

    expect(tired).toEqual(true);
    expect(tiredFace).toEqual('😴');
  });
  it('can select for isTired false', () => {
    const state = {
      coffees: 1, 
      naps: 1
    };
    const tired = isTired(state);
    const notTiredFace = getFace(state);

    expect(tired).toEqual(false);
    expect(notTiredFace).toEqual('😀');
  });

  it('can select for isHyper true and return correct hyper face emoji', () => {
    const state = {
      coffees: 4
    };
    const hyper = isHyper(state);
    const hyperFace = getFace(state);

    expect(hyper).toEqual(true);
    expect(hyperFace).toEqual('🙀');
  });
  it('can select for isHyper false', () => {
    const state = {
      coffees: 3
    };
    const hyper = isHyper(state);
    const notHyperFace = getFace(state);

    expect(hyper).toEqual(false);
    expect(notHyperFace).toEqual('😀');
  });

  it('can select for isEducated true and return correct educated face emoji', () => {
    const state = {
      studies: 3
    };
    const ed = isEducated(state);
    const edFace = getFace(state);


    expect(ed).toEqual(true);
    expect(edFace).toEqual('😲');
  });
  it('can select for isEducated false', () => {
    const state = {
      studies: 2
    };
    const ed = isEducated(state);
    const notStudyFace = getFace(state);

    expect(ed).toEqual(false);
    expect(notStudyFace).toEqual('😀');
  });

  it('can select for isHungry true and return correct hungry face emoji', () => {
    const state = {
      snacks: 0
    };
    const hunger = isHungry(state);
    const hungryFace = getFace(state);

    expect(hunger).toEqual(true);
    expect(hungryFace).toEqual('😡');
  });
  it('can select for isHungry false', () => {
    const state = {
      studies: 1
    };
    const hunger = isHungry(state);
    const notHungryFace = getFace(state);

    expect(hunger).toEqual(false);
    expect(notHungryFace).toEqual('😀');
  });

  it('can select for isTired true and isHungry true and return correct tired/hungry face emoji', () => {
    const state = {
      coffees: 0, 
      naps: 0,
      snacks: 0
    };
    const hunger = isHungry(state);
    const tired = isTired(state);
    const tiredHungryFace = getFace(state);

    expect(tired).toEqual(true);
    expect(hunger).toEqual(true);
    expect(tiredHungryFace).toEqual('😠');
  });

  it('can select for isHyper true and isHungry true and return correct hyper/hungry face emoji', () => {
    const state = {
      coffees: 4, 
      naps: 0,
      snacks: 0
    };
    const hyper = isHyper(state);
    const hunger = isHungry(state);
    const hyperHungryFace = getFace(state);

    expect(hyper).toEqual(true);
    expect(hunger).toEqual(true);
    expect(hyperHungryFace).toEqual('😱');
  });

});

