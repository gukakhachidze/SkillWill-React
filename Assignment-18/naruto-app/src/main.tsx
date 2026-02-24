import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./styles.css";

import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Characters, { charactersLoader } from "./pages/Characters";
import CharacterDetails, { characterLoader } from "./pages/CharacterDetails";
import AddCharacter, { addCharacterAction } from "./pages/AddCharacter";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },

      {
        path: "characters",
        element: <Characters />,
        loader: charactersLoader,
      },
      {
        path: "characters/:id",
        element: <CharacterDetails />,
        loader: characterLoader,
      },
      {
        path: "add",
        element: <AddCharacter />,
        action: addCharacterAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(<RouterProvider router={router} />);
