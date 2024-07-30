import { useState } from "react";
import { useMutation } from "@apollo/client";
import { SIGNUP_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const Signup = () => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [signup, { error }] = useMutation(SIGNUP_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await signup({
        variables: { ...formState },
      });
      Auth.login(data.signup.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <h4>Sign Up</h4>
      <form onSubmit={handleFormSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={formState.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="******"
          value={formState.password}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      {error && <div>Sign up failed</div>}
    </div>
  );
};

export default Signup;
