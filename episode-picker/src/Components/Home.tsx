import React, { useContext } from "react";
import { Store } from "../Store/store";
export default function Home(): JSX.Element {
  const store = useContext(Store);

  return (
    <div>
      <h2> Rick and Morty epsiode picker </h2>
      {console.log(store)}
    </div>
  );
}
