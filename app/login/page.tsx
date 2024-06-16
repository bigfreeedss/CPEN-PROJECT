'use client'
import { useRouter } from "next/navigation"


export default function LoginPage(){
  const router = useRouter()

const handleButtonEvent  = function(){
  console.log(router)
router.push('/dashboard')
}

    return (
        <section className="bg-purple-50 dark:bg-blue-500">
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
          Sign in to your account
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
              Your id
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="id"
              name="id"
              placeholder="enter id here"
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
          <div className="flex items-center justify-between">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  aria-describedby="remember"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  id="remember"
                  required
                  type="checkbox"
                />
              </div>
              <div className="ml-3 text-sm">
                <label
                  className="text-gray-500 dark:text-gray-300"
                  htmlFor="remember"
                >
                  Remember me
                </label>
              </div>
            </div>
            <a
              className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
              href="#"
            >
              Forgot password?
            </a>
          </div>
       
          <button
            className="w-full text-white bg-indigo-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            type="submit"
            onClick={handleButtonEvent}
          >
            Sign in
          </button>
        
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Don’t have an account yet?{' '}
            <a
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              href="register"
            >
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  </div>
</section>
    )
}