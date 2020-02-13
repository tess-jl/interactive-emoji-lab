import React, { useReducer } from 'react';
import taskReducer from '../reducers/taskReducer';
import { getFace } from '../selectors/moodSelectors';
import { DRINK_COFFEE, drinkCoffee, EAT_SNACK, eatSnack, TAKE_NAP, takeNap, STUDY, study } from '../actions/taskActions';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';

const Moods = () => {
  const initialState = {
    coffees: 0, 
    snacks: 0,
    naps: 0,
    studies: 0
  };

  const [moods, dispatch] = useReducer(taskReducer, initialState);

  const face = getFace(moods);

  const actions = [
    { name: DRINK_COFFEE, text: 'Drink Coffee', stateName: 'coffees', count: moods.coffees, actionCreator: () => dispatch(drinkCoffee()) },
    { name: EAT_SNACK, text: 'Snack', stateName: 'snacks', count: moods.snacks, actionCreator: () => dispatch(eatSnack()) },
    { name: TAKE_NAP, text: 'Nap', stateName: 'naps', count: moods.naps, actionCreator: () => dispatch(takeNap()) },
    { name: STUDY, text: 'Study', stateName: 'studies', count: moods.studies, actionCreator: () => dispatch(study()) },
  ];

  return (
    <>
      <Controls actions={actions} />
      <Face emoji={face} />
    </>
  );
};

export default Moods;
