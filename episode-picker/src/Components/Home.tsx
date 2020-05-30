import React, { useContext, useEffect } from "react";
import { Store } from "../Store/store";
import "./Home.css";
interface IEpisode {
  airdate: string;
  airstamp: string;
  airtime: string;
  id: number;
  image: { medium: string; original: string };
  name: string;
  number: number;
  runtime: number;
  season: number;
  summary: string;
  url: string;
}

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
                Season: {episode.season} Number: {episode.number}
              </section>
            </section>
          );
        })}
      </section>
    </div>
  );
}
