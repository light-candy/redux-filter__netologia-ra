import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterServices } from '../actions/actionCreators';

export function ServiceFilter(){
    const { filter } = useSelector((state) => state.serviceList);
    const dispatch = useDispatch();

    const handleClear = useCallback(
        (event) => {
            event.preventDefault();
            dispatch(filterServices(""));
        },
        [dispatch]
    );

    const handleChange = useCallback(
        (event) => {
            dispatch(filterServices(event.target.value));
        },
        [dispatch]
    );

    return(
        <div className="filter">
          <input onChange={handleChange}
                 type="search"
                 name="filter"
                 value={filter}
          />
          {(filter === "") ? null :
          <button onClick={handleClear} className="button button_close">
          <span className="material-icons">
            close
          </span>
          </button>
          }
        </div>
    )
}
