import { Component } from "react";

import { data } from "./data/data";
import { Section } from "./components/Section/Section";
import { Users } from "./components/Users/Users";
import { Button } from "./components/Button/Button";
import { AddUserForm } from "./components/AddUserForm/AddUserForm";

class App extends Component {
  // constructor() {
  //   super();

  //   this.state = {};

  // }

  state = {
    users: data,
    isListShown: false,
    isFormShown: false,
  };

  showUsers = () => {
    this.setState({ isListShown: true });
  };

  showForm = () => {
    this.setState({ isFormShown: true });
  };

  closeForm = () => {
    this.setState({ isFormShown: false });
  };

  deleteUser = (userId) => {
    // this.setState((prevState) => {
    //   return {
    //     users: prevState.users.filter((user) => user.id !== userId),
    //   };
    // });
    this.setState((prevState) => ({
      users: prevState.users.filter((user) => user.id !== userId),
    }));
  };

  addUser = (data) => {
    const newUser = { ...data, id: Date.now() };
    this.setState((prevState) => ({
      users: [...prevState.users, newUser],
    }));
  };

  render() {
    const { isListShown, users, isFormShown } = this.state;
    return (
      <>
        {isListShown ? (
          <Section title="List of users">
            <Users users={users} deleteUser={this.deleteUser} />
            {isFormShown ? (
              <AddUserForm addUser={this.addUser} closeForm={this.closeForm}/>
            ) : (
              <Button
                textContent="Add user"
                type="button"
                clickHandler={this.showForm}
              />
            )}
          </Section>
        ) : (
          <Button
            textContent="Show list of users"
            type="button"
            clickHandler={this.showUsers}
          />
        )}
      </>
    );
  }
}

export default App;
