
import { useState } from 'react';
import { useMutation } from '@apollo/client'
import { SIGNUP_USER } from "../utils/mutations";
import Auth from "../utils/auth";

function Register() {

  const [formState, setFormState] = useState({ username: '', email: '', password: '' });
  const [signup, { error }] = useMutation(SIGNUP_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await signup({
        variables: { ...formState },
      });
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="flex justify-center pt-[90px]">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col w-[500px] p-10">
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <h2 className="mb-4">Login Form</h2>
            <hr />
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="useranme"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              id="username"
              type="username"
              name="username"
              placeholder="Username"
              value={formState.username}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              value={formState.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
              id="password"
              type="password"
              name="password"
              placeholder="******************"
              value={formState.password}
              onChange={handleChange}
            />
            <p className="text-red text-xs italic">Please choose a password.</p>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-400 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Sign In
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
              href="/signup"
            >
              Register
            </a>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
        {error && <p className="text-red-500 text-xs italic mt-4">Login failed. Please check your credentials and try again.</p>}
      </div>
    </div>
  );
  /*
  return (
    <div class="flex justify-center pt-[90px]">
      <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col w-[500px] p-10">
        <div class="mb-4">
          <h2 class="mb-4">Register Form</h2>
          <hr />
          <label
            class="block text-grey-darker text-sm font-bold mb-2"
            for="username"
          >
            Username
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-grey-darker text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
            id="password"
            type="password"
            placeholder="******************"
          />
          <p class="text-red text-xs italic">Please choose a password.</p>
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-blue-400 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
            type="button"
          >
            Register
          </button>
          <a
            class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
            href="/login"
          >
            Sign In
          </a>
          <a
            class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
            href="#"
          ></a>
        </div>
      </div>
    </div>
  );
  */
}

export default Register;
