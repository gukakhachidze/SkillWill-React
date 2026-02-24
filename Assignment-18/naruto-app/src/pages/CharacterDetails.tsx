import { useLoaderData, LoaderFunctionArgs } from "react-router-dom";
import { characters } from "../data/characters";
import { Character } from "../types/Character";

export const characterLoader = ({ params }: LoaderFunctionArgs) => {
  return characters.find((c) => c.id === Number(params.id));
};

export default function CharacterDetails() {
  const character = useLoaderData() as Character;

  return (
    <div className="card">
      <h2>{character.name}</h2>
      <p>სოფელი: {character.village}</p>
    </div>
  );
}
