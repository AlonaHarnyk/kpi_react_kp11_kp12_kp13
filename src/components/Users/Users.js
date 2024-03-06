import { User } from "../User/User";

export const Users = ({
  users,
  deleteUser,
  updateUser,
  userToUpdate,
  showUpdateForm,
}) => {
  return (
    <ul>
      {users.map((user) => {
        return (
          <li key={user.id}>
            <User
              user={user}
              deleteUser={deleteUser}
              updateUser={updateUser}
              userToUpdate={userToUpdate}
              showUpdateForm={showUpdateForm}
            />
          </li>
        );
      })}
    </ul>
  );
};
