export const AddUserForm = ({ addUser, closeForm }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
    };
    addUser(data);
    closeForm();
    e.target.reset();
  };

  return (
    <form onSubmit={submitHandler}>
      <label>
        Name: <input name="name" />
      </label>
      <label>
        Email: <input name="email" />
      </label>
      <button>Submit</button>
    </form>
  );
};
