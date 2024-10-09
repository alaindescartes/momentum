import {
  updateAuthState,
  updateLoadingState,
  updateUserState,
} from '@/redux/slices/userSlice';
import axiosInstance from '@/utils/axios';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const SignIn = () => {
  const [formdata, setFormData] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const isLoading = useSelector(state => state.user.isLoading);
  const dispatch = useDispatch();

  //capture inputs using state
  const handleChange = e => {
    setError(null);
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value, // Update the specific input field by its name attribute
    }));
  };

  //submit the input to the backend
  const handleSubmission = async e => {
    e.preventDefault();
    try {
      //set loading to true
      dispatch(updateLoadingState(true));
      const response = await axiosInstance(
        'api/auth/sign-in',
        'POST',
        formdata
      );
      const user = response.data.user;
      if (user) {
        console.log('Dispatching updateUserState with:', user);
        //set userData in the global store
        dispatch(updateUserState(user));
        dispatch(updateAuthState(true));

        navigate('/dashboard');
        toast('successfully logged in', {
          style: {
            background: '#4caf50',
            color: '#fff',
          },
        });
      }
    } catch (error) {
      setError(error.message);
      console.log(error);
    } finally {
      //set loading back to false
      dispatch(updateLoadingState(false));
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 flex-col">
      {error && (
        <p className="bg-red-500 text-white font-bold px-4 py-2 rounded-md">
          {error}
        </p>
      )}

      <form
        className="bg-white shadow-md mt-6 rounded-lg p-8 flex flex-col gap-4 w-full max-w-md"
        onSubmit={handleSubmission}
      >
        <h2 className="text-3xl font-bold text-gray-700 mb-5 text-center">
          Sign In
        </h2>

        <input
          type="text"
          placeholder="Username"
          name="username"
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleChange}
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleChange}
        />

        <button
          disabled={isLoading ? true : false}
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors duration-300"
        >
          {isLoading ? 'Logging In...' : ' Sign In'}
        </button>

        <div className="flex items-center justify-center gap-2 mt-4">
          <span className="h-px w-20 bg-gray-300"></span>
          <span className="text-sm text-gray-500">or</span>
          <span className="h-px w-20 bg-gray-300"></span>
        </div>

        <button
          disabled={isLoading ? true : false}
          type="button"
          className="mt-2 px-4 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition-colors duration-300"
        >
          {/* TODO:add google auth */}
          Sign in with Google
        </button>

        <p className="text-sm text-gray-500 text-center mt-4">
          Don't have an account?{' '}
          <Link className="text-blue-500 hover:underline" to="/signUp">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};
export default SignIn;
