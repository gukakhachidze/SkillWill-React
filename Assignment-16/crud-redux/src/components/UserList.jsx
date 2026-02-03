import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, deleteUser } from "../store/usersSlice";

function UserList() {
  const { list, status } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (status === "loading") return <p>Loading...</p>;

  return (
    <div>
      {list.map((user) => (
        <div key={user.id}>
          {user.name}
          <button onClick={() => dispatch(deleteUser(user.id))}>❌</button>
        </div>
      ))}
    </div>
  );
}

export default UserList;
