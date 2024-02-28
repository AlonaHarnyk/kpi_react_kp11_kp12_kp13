export const User = ({user, deleteUser}) => {
    return (
    <><p>{user.name}</p>
    <p>{user.email}</p>
    <button type='button' onClick={() => deleteUser(user.id)}>Delete</button>
    </>
    )
}

