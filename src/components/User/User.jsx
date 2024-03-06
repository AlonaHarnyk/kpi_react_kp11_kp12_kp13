import UpdateUserForm from "../UpdateUserForm/UpdateUserForm"

export const User = ({user, deleteUser, updateUser, userToUpdate, showUpdateForm}) => {
    return (
    <><p>{user.name}</p>
    <p>{user.email}</p>
    <button type='button' onClick={() => deleteUser(user.id)}>Delete</button>
    <button type='button' onClick={() => {showUpdateForm(user.id)}}>Edit</button>
    {userToUpdate && userToUpdate.id === user.id && <UpdateUserForm updateUser={updateUser} userToUpdate={user}/>}
    </>
    )
}

