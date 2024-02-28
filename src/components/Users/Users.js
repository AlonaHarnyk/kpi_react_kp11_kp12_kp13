import { User } from "../User/User";

export const Users = ({ users, deleteUser }) => {
  return (
    <ul>
      {users.map((user) => {
        return (
          <li key={user.id}>
            <User user={user} deleteUser={deleteUser} />
          </li>
        );
      })}
    </ul>
  );
};
