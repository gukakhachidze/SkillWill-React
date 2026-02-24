import { Form, redirect } from "react-router-dom";
import { characters } from "../data/characters";

export const addCharacterAction = async ({ request }: any) => {
  const formData = await request.formData();

  characters.push({
    id: Date.now(),
    name: formData.get("name"),
    village: formData.get("village"),
  });

  return redirect("/characters");
};

export default function AddCharacter() {
  return (
    <div className="card">
      <h2>პერსონაჟის დამატება</h2>

      <Form method="post">
        <input name="name" placeholder="სახელი" required />
        <input name="village" placeholder="სოფელი" required />
        <button>დამატება</button>
      </Form>
    </div>
  );
}
