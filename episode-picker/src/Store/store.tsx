import React from "react";

// using contextAPI via useContext hook and useReducer hook while following Redux principles.
const initialState = {};

export const Store = React.createContext(initialState);


function reducer() {}

export function StoreProvider(props: any): JSX.Element {
  return <Store.Provider value="text"> {props.children} </Store.Provider>;
}
