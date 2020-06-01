import React from "react";
import { IEpisode } from "../Interfaces/iindex";

export default function EpisodeList(props: any) {
  const { episodes, favourites, toggleFavoriteEpisode } = props;
  return (
    <>
      <section className="episode-layout">
        {episodes.map((episode: IEpisode) => {
          return (
            <section key={episode.id} className="episode-box">
              <img
                src={episode.image ? episode.image.medium : ""}
                alt={`Rick and Morty ${episode.name}`}
              />
              <div>{episode.name}</div>
              <section
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <div>
                  Season: {episode.season} Number: {episode.number}
                </div>
                <button
                  type="button"
                  onClick={() => toggleFavoriteEpisode(episode)}
                >
                  {" "}
                  {favourites && favourites.includes(episode)
                    ? "Remove from favourite"
                    : "Add to favourite"}{" "}
                </button>
              </section>
            </section>
          );
        })}
      </section>
    </>
  );
}
