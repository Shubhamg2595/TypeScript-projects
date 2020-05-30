import React, { useContext, useEffect } from "react";
import { Store } from "../Store/store";
export default function Home(): JSX.Element {
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    fetchDataAction();
  }, []);

  const fetchDataAction = async () => {
    const url =
      "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";
    const data = await fetch(url);
    const jsonData = await data.json();

    return dispatch({
      type: "FETCH_DATA",
      payload: jsonData._embedded.episodes,
    });
  };

  return (
    <div>
      {console.log(state)}
      <h2> Rick and Morty epsiode picker </h2>
    </div>
  );
}
