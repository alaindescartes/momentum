import axiosInstance from '@/utils/axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const SignIn = () => {
  const [formdata, setFormData] = useState({
    username: '',
    password: '',
  });
  const navigate = useNavigate();

  //capture inputs using state
  const handleChange = e => {
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
      const response = await axiosInstance(
        'api/auth/sign-in',
        'POST',
        formdata
      );

      if (response.user) {
        toast('successfully logged in', {
          style: {
            background: '#4caf50',
            color: '#fff',
          },
        });
        navigate('dashboard');
      }
    } catch (error) {}
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        className="bg-white shadow-md rounded-lg p-8 flex flex-col gap-4 w-full max-w-md"
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
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors duration-300"
        >
          Sign In
        </button>

        <div className="flex items-center justify-center gap-2 mt-4">
          <span className="h-px w-20 bg-gray-300"></span>
          <span className="text-sm text-gray-500">or</span>
          <span className="h-px w-20 bg-gray-300"></span>
        </div>

        <button
          type="button"
          className="mt-2 px-4 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition-colors duration-300"
        >
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
