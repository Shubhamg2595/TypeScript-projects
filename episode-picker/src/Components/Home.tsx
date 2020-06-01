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

  const toggleFavoriteEpisode = (episode: IEpisode): IAction =>
    dispatch({
      type: "ADD_FAV",
      payload: episode,
    });

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
                <button
                  type="button"
                  onClick={() => toggleFavoriteEpisode(episode)}
                >
                  {" "}
                  Add to favourite{" "}
                </button>
              </section>
            </section>
          );
        })}
      </section>
    </div>
  );
}
