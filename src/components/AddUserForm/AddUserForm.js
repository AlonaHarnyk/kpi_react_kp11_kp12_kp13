// export const AddUserForm = ({ addUser, closeForm }) => {
//   const submitHandler = (e) => {
//     e.preventDefault();
//     const data = {
//       name: e.target.elements.name.value,
//       email: e.target.elements.email.value,
//     };
//     addUser(data);
//     closeForm();
//     e.target.reset();
//   };

//   return (
//     <form onSubmit={submitHandler}>
//       <label>
//         Name: <input name="name" />
//       </label>
//       <label>
//         Email: <input name="email" />
//       </label>
//       <button>Submit</button>
//     </form>
//   );
// };

// import { Component } from "react";

// class AddUserForm extends Component {
//   state = {
//     name: "",
//     email: "",
//   };

//   changeHandler = ({ target: { name, value } }) => {
//     this.setState({ [name]: value });
//   };

//   submitHandler = (e) => {
//     e.preventDefault();
//     this.props.addUser({...this.state});
//     this.props.closeForm();
//     // this.setState({ name: "", email: "" });
//   };

//   render() {
//     const { name, email } = this.state;

//     return (
//       <form onSubmit={this.submitHandler}>
//         <label>
//           Name:
//           <input
//             name="name"
//             onChange={this.changeHandler}
//             value={name.toUpperCase()}
//           />
//         </label>
//         <label>
//           Email:
//           <input name="email" onChange={this.changeHandler} value={email} />
//         </label>
//         <button>Submit</button>
//       </form>
//     );
//   }
// }

// export default AddUserForm;
