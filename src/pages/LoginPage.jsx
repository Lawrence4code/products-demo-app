import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { login, authorize } from './../redux/user/user.actions';

const LoginPage = () => {
  const {
    register,
    errors,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    mode: 'onChange',
  });

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.auth) {
      dispatch(authorize(user));
      history.push('/profile');
    }
  }, [dispatch, history]);

  const onSubmit = (data) => {
    const payload = { ...data, auth: true };
    dispatch(login(payload));
    history.push('/profile');
    localStorage.setItem('user', JSON.stringify(payload));
  };

  return (
    <div className="h-screen text-center">
      <div className="w-8/12 mx-auto  mt-20">
        <h2 className="font-logo text-4xl">
          Welcome to Awesome Products, please login to manage products.
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-4/12 mt-10 mx-auto"
        >
          <div>
            <div className="flex justify-between items-center mt-5">
              <label htmlFor="name" className="block text-blue-900  px-1 mb-1">
                Name:
              </label>
              <input
                className="w-9/12 px-3 py-2 rounded  my-1"
                type="text"
                placeholder="Enter name"
                ref={register({
                  required: { value: true, message: '*Required field' },
                  minLength: { value: 4, message: 'Mininum 4 letters please' },
                  maxLength: {
                    value: 20,
                    message: 'Maximum 20 letters please',
                  },
                })}
                name="name"
              />
            </div>
            {errors.name && (
              <p className="block text-red-600 text-xs font-semibold px-1">
                {errors?.name?.message}
              </p>
            )}
          </div>
          <div>
            <div className="flex justify-between items-center mt-5">
              <label htmlFor="email" className="block text-blue-900  px-1 mb-1">
                Email:
              </label>
              <input
                className="w-9/12 px-3 py-2 rounded  my-1"
                type="text"
                placeholder="Enter email address"
                ref={register({
                  required: { value: true, message: '*Required field' },
                  pattern: {
                    value: /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/,
                    message: 'Please enter valid email.',
                  },
                })}
                name="email"
              />
            </div>
            {errors.email && (
              <p className="block text-red-600 text-xs font-semibold px-1">
                {errors?.email?.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={!isValid}
            className="bg-green-500 w-/4 hover:bg-green-700 text-white font py-1 px-3 border border-green-700 rounded mx-auto mt-6"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
