import { useState } from 'react';
import { XCircleIcon } from '@heroicons/react/16/solid';
import { useUserAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Shared/Logo';
import axios from 'axios';

export default function Signup() {
  const navigate = useNavigate();
  const [pending, setPending] = useState(false);
  const lambdaUrl =
    'https://hs4drk3vhdodm66fknnytg4biy0tnjdi.lambda-url.us-east-2.on.aws';
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    passwordLengthError: false,
    passwordMismatchError: false,
  });

  const { signUp } = useUserAuth();

  const handleCredentials = (e) => {
    const { name, value } = e.target;
    setUserCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    setPending(true);
    e.preventDefault();
    setPending(true);
    setErrors({
      passwordLengthError: false,
      passwordMismatchError: false,
    });

    if (userCredentials.password.length < 6) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        passwordLengthError: true,
      }));
      setPending(false);
      return;
    }

    if (userCredentials.password !== userCredentials.confirmPassword) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        passwordMismatchError: true,
      }));
      setPending(false);
      return;
    }

    try {
      const userCredential = await signUp(
        userCredentials.email,
        userCredentials.password
      );
      await axios.get(
        `${lambdaUrl}/generateCurrentDataAndQueryFields/?uid=${userCredential.user.uid}`
      );
      setPending(false);
      navigate('/login');
      console.log(userCredential.user.uid);
    } catch (error) {
      console.error(error);
      setPending(false);
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="flex justify-center">
          <Logo color="#EC4D37" />
        </div>
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign Up to conduct literature reviews faster!
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} method="POST" className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                value={userCredentials.email}
                onChange={handleCredentials}
                required
                autoComplete="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                value={userCredentials.password}
                onChange={handleCredentials}
                required
                autoComplete="current-password"
                className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Confirm Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="confirm-password"
                name="confirmPassword" // Change name to match the state key
                type="password"
                value={userCredentials.confirmPassword}
                onChange={handleCredentials}
                required
                autoComplete="current-password"
                className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          {errors.passwordLengthError || errors.passwordMismatchError ? (
            <div className="rounded-md bg-red-50 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <XCircleIcon
                    aria-hidden="true"
                    className="h-5 w-5 text-red-400"
                  />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-800">
                    Following error(s) were encountered:
                  </h3>
                  <div className="mt-2 text-sm text-red-700">
                    <ul role="list" className="list-disc space-y-1 pl-5">
                      {errors.passwordLengthError && (
                        <li>Your password must be at least 6 characters</li>
                      )}
                      {errors.passwordMismatchError && (
                        <li>Your passwords do not match</li> // Update the message to match the error
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ) : null}

          <div>
            <button
              disabled={pending}
              type="submit"
              className="flex w-full justify-center rounded-md bg-neutral-950 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Become a Member
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
