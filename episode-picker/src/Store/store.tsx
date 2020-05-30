import React from "react";

// using contextAPI via useContext hook and useReducer hook while following Redux principles.

interface IState {
  episodes: [];
  favourites: [];
}

const initialState: IState = {
  episodes: [],
  favourites: [],
};

export const Store = React.createContext<IState>(initialState);

function reducer() {}

export function StoreProvider(props: any): JSX.Element {
  return (
    <Store.Provider value={initialState}> {props.children} </Store.Provider>
  );
}
