import React, { useContext, useEffect } from "react";
import { Store } from "../Store/store";
import { IAction, IEpisode } from "../Interfaces/iindex";
import "./Home.css";

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
        <h2> Rick and Morty epsiode picker </h2>
      </header>
      <section className="episode-layout">
        {state.episodes.map((episode: IEpisode) => {
          return (
            <section key={episode.id} className="episode-box">
              <img
                src={episode.image ? episode.image.medium : ""}
                alt={`Rick and Morty ${episode.name}`}
              />
              <div>{episode.name}</div>
              <section>
                <div>
                  Season: {episode.season} Number: {episode.number}
                </div>
                {state.favourites && state.favourites.includes(episode)
                  ? "True"
                  : "false"}
                <button
                  type="button"
                  onClick={() => toggleFavoriteEpisode(episode)}
                >
                  {" "}
                  {state.favourites && state.favourites.includes(episode)
                    ? "Remove from favourite"
                    : "Add to favourite"}{" "}
                </button>
              </section>
            </section>
          );
        })}
      </section>
    </div>
  );
}
