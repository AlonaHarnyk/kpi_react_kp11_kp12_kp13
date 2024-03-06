import { Component } from "react";

class UpdateUserForm extends Component {
  state = {
    name: this.props.userToUpdate.name,
    email: this.props.userToUpdate.email,
  };

  changeHandler = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    this.props.updateUser({ ...this.props.userToUpdate, ...this.state });
  };

  render() {
    const { name, email } = this.state;

    return (
      <form onSubmit={this.submitHandler}>
        <label>
          Name:
          <input name="name" onChange={this.changeHandler} value={name} />
        </label>
        <label>
          Email:
          <input name="email" onChange={this.changeHandler} value={email} />
        </label>
        <button>Submit</button>
      </form>
    );
  }
}

export default UpdateUserForm;
