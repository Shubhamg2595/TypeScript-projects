import React, { useReducer } from "react";

// using contextAPI via useContext hook and useReducer hook while following Redux principles.

interface IState {
  episodes: [];
  favourites: [];
}
interface IAction {
  type: string;
  payload: any;
}

const initialState: IState = {
  episodes: [],
  favourites: [],
};

export const Store = React.createContext<IState | any>(initialState);

function reducer(state: IState = initialState, action: IAction): IState {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state,
        episodes: action.payload,
      };

    default:
      return state;
  }
}

export function StoreProvider(props: any): JSX.Element {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <Store.Provider value={{ state, dispatch }}>
      {" "}
      {props.children}{" "}
    </Store.Provider>
  );
}
