export const isTired = state => state.coffees < 1 && state.naps < 1;
export const isHyper = state => state.coffees > 3;
export const isEducated = state => state.studies > 2;
export const isHungry = state => state.snacks < 1;
