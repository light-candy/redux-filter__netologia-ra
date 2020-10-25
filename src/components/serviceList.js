import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeService, startEditService } from '../actions/actionCreators';

export function ServiceList(){
    const { items, filtered } = useSelector((state) => state.serviceList);
    const dispatch = useDispatch();

    const handleRemove = (id) => {
      dispatch(removeService(id));
    };

    const handleEdit = (id, name, price) => {
        dispatch(startEditService(id, name, price));
    };
   const services = ()  => {
       if (!filtered) {
           return items;
       } else {
           return filtered;
       }
   }
    return(
        <ul>
         {services().map(({ id, name, price }) => (
         <li key={id}>
           {`${name} ${price}`}
           <button onClick={() => handleRemove(id)} className="button button_close">
              <span className="material-icons">
               close
             </span>
           </button>
           <button onClick={() => handleEdit(id, name, price)} className="button button_close">
             <span className="material-icons">
               edit
             </span>
           </button>
         </li>
         ))}
        </ul>
    );
}
