import { Link, useLoaderData } from "react-router-dom";
import { characters } from "../data/characters";
import { Character } from "../types/Character";

export const charactersLoader = (): Character[] => {
  return characters;
};

export default function Characters() {
  const data = useLoaderData() as Character[];

  return (
    <>
      <h2>პერსონაჟები</h2>

      {data.map((c) => (
        <div className="card" key={c.id}>
          <Link to={c.id.toString()}>{c.name}</Link>
        </div>
      ))}
    </>
  );
}
