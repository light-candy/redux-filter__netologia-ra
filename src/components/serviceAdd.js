import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeServiceField,
         clearServiceField,
         addService } from '../actions/actionCreators';
import { nanoid } from 'nanoid';

const selectServiceAdd = (state) => state.serviceAdd;

export function ServiceAdd() {
  const item = useSelector(selectServiceAdd);
  const dispatch = useDispatch();

  const handleChange = useCallback(
        (event) => {
            const { name, value } = event.target;
            dispatch(changeServiceField(name, value));
        },
        [dispatch]
  );
  const handleSubmit = useCallback(
        (event) => {
            event.preventDefault();
            if (item.id === "") {
               item.id = nanoid();
            }
            dispatch(addService(item.id, item.name, item.price));
        },
        [item, dispatch]
  );
  const handleCancel = useCallback(
        (event) => {
            event.preventDefault();
            dispatch(clearServiceField());
        },
        [dispatch]
  );

  return(
        <form onSubmit={handleSubmit}>
         <input name="name" onChange={handleChange} value={item.name} />
         <input name="price" onChange={handleChange} value={item.price} />
          <button type="submit"
                  className="button"
                  disabled={item.name === "" && item.price === ""}>
            Save
          </button>
         <button onClick={handleCancel} className="button">Cancel</button>
        </form>
  );
}
