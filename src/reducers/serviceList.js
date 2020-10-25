import { nanoid } from 'nanoid';
import { ADD_SERVICE,
         REMOVE_SERVICE,
         FILTER_SERVICES
       } from '../actions/actionTypes';

const initialState = {
  items: [
    { id: nanoid(), name: "Замена стекла", price: 21000 },
    { id: nanoid(), name: "Замена батареи", price: 25000 }
  ],
  filter: ""
};

export default function serviceListReducer(state = initialState, action) {
    switch(action.type){
      case ADD_SERVICE:
        const { id, service, price } = action.payload;
        if (state.items.find((o) => o.id === id)){
            const edited =  [ ...state.items.map((o) =>
                               (o.id !== id) ? o : {...o, name: service, price: Number(price)})
                  ];
            return {...state,
                  items: edited,
                  filtered: edited.filter((o) => o.name.toLowerCase().includes(state.filter))
                   };
        }
        else {
            const appended =  [ ...state.items, { id, name: service, price: Number(price)} ];
            return { ...state,
                     items: appended,
                     filtered: appended.filter((o) => o.name.toLowerCase().includes(state.filter))
                   };
        }
      case REMOVE_SERVICE:
        const cleansed =  [ ...state.items.filter((service) => service.id !== action.payload.id) ];
        return { ...state,
                 items: cleansed,
                 filtered: cleansed.filter((o) => o.name.toLowerCase().includes(state.filter))
               };
      case FILTER_SERVICES:
        const { mask } = action.payload;
        if (mask === ""){
            return { ...state,
                     filter:mask,
                     filtered:[ ...state.items ]
                   };
        } else {
            return { ...state,
                     filter:mask.toLowerCase(),
                     filtered: [ ...state.items.filter((o) => o.name.toLowerCase().includes(mask.toLowerCase())) ]
                   };
        }
      default:
        return state;
    }
};
