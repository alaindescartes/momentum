const SignIn = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="bg-white shadow-md rounded-lg p-8 flex flex-col gap-4 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-700 mb-5 text-center">
          Sign In
        </h2>

        <input
          type="text"
          placeholder="Username"
          name="username"
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          <a href="#" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
};
export default SignIn;
