export default function RegisterPage(){
    return(
        <section className="bg-gray-50 dark:bg-blue-500">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <a
      className="flex items-center mb-6 text-3xl font-semibold text-gray-900 dark:text-white"
      href="#"
    >
      <img
        alt="logo"
        className="w-8 h-8 mr-2"
        src="https://img.freepik.com/premium-photo/abstract-blue-black-logo-dark-background_893012-74660.jpg"
      />
      CPEN-UG
    </a>
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Create an account
        </h1>
        <form
          action="#"
          className="space-y-4 md:space-y-6"
        >
          <div>
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="email"
            >
              Staff/Student id
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="id"
              name="id"
              placeholder="input your id"
              required
              type="id"
            />
          </div>
          <div>
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="password"
              name="password"
              placeholder="••••••••"
              required
              type="password"
            />
          </div>
          <div>
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="confirm-password"
            >
              Confirm password
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="confirm-password"
              name="confirm-password"
              placeholder="••••••••"
              required
              type="confirm-password"
            />
          </div>
          
          <button
            className="w-full text-white bg-indigo-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            type="submit"
          >
            Create an account
          </button>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400 text-center" >
            Already have an account?{' '}
            <a
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              href="login"
            >
              Login here
            </a>
          </p>
        </form>
      </div>
    </div>
  </div>
</section>
    )
}