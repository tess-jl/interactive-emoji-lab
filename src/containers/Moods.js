import React, { useReducer } from 'react';
import taskReducer from '../reducers/taskReducer';
import { getFace } from '../selectors/moodSelectors';
import { DRINK_COFFEE, drinkCoffee, EAT_SNACK, eatSnack, TAKE_NAP, takeNap, STUDY, study } from '../actions/taskActions';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';

const MoodPage = () => {
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

export default MoodPage;


// import React, { Component } from 'react';
// import Controls from '../components/controls/Controls';
// import Face from '../components/face/Face';


// const actions = [
//   { name: 'DRINK_COFFEE', text: 'Drink Coffee', stateName: 'coffees' },
//   { name: 'EAT_SNACK', text: 'Snack', stateName: 'snacks' },
//   { name: 'TAKE_NAP', text: 'Nap', stateName: 'naps' },
//   { name: 'STUDY', text: 'Study', stateName: 'studies' },
// ];

// export const isTired = state => state.coffees < 1 && state.naps < 1;
// export const isHyper = state => state.coffees > 3;
// export const isEducated = state => state.studies > 2;
// export const isHungry = state => state.snacks < 1;

// export const getFace = state => {
//   if(isTired(state) && isHungry(state)) return '😠';
//   if(isHyper(state) && isHungry(state)) return '😱';
//   if(isTired(state)) return '😴';
//   if(isHyper(state)) return '🙀';
//   if(isEducated(state)) return '😲';
//   if(isHungry(state)) return '😡';

//   return '😀';
// };

// export default class Moods extends Component {
//   state = {
//     coffees: 0,
//     snacks: 0,
//     naps: 0,
//     studies: 0
//   }

//   handleSelection = name => {
//     switch(name) {
//       case 'DRINK_COFFEE':
//         this.setState(state => ({ coffees: state.coffees + 1 }));
//         break;
//       case 'EAT_SNACK':
//         this.setState(state => ({ snacks: state.snacks + 1 }));
//         break;
//       case 'TAKE_NAP':
//         this.setState(state => ({ naps: state.naps + 1 }));
//         break;
//       case 'STUDY':
//         this.setState(state => ({ studies: state.studies + 1 }));
//         break;
//       default:
//         console.log(`unhandled name: ${name}`);
//     }
//   }

//   render() {
//     const face = getFace(this.state);
//     const controlActions = actions.map(action => ({
//       ...action,
//       count: this.state[action.stateName]
//     }));

//     return (
//       <>
//         <Controls actions={controlActions} handleSelection={this.handleSelection}/>
//         <Face emoji={face} />
//       </>
//     );
//   }
// }
