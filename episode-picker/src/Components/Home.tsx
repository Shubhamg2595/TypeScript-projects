import React, { useContext, useEffect } from "react";
import { Store } from "../Store/store";
import { IAction, IEpisode } from "../Interfaces/iindex";
import "./Home.css";

const EpisodeList = React.lazy<any>(() => import("./EpisodeList"));

export default function Home(): JSX.Element {
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    fetchDataAction();
  // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const toggleFavoriteEpisode = (episode: IEpisode): IAction => {
    let dispatchObj = {
      type: "ADD_FAV",
      payload: episode,
    };

    const favEpisode = state.favourites.includes(episode) ? true : false;
    if (favEpisode) {
      dispatchObj = {
        type: "REMOVE_FAV",
        payload: episode,
      };
    }
    return dispatch(dispatchObj);
  };

  console.log(state.favourites);

  return (
    <div>
      <header className="header">
        <div>
          <h2> Rick and Morty epsiode picker </h2>
        </div>
        <div> Favourite(s) : {state.favourites.length}</div>
      </header>
      <React.Suspense fallback={<div> loading..... </div>}>
        <EpisodeList
          episodes={state.episodes}
          favourites={state.favourites}
          toggleFavoriteEpisode={toggleFavoriteEpisode}
        />
      </React.Suspense>
    </div>
  );
}
