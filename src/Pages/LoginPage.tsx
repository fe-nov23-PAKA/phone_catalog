export const LoginPage = () => {
  return (
    <form className="absolute left-1/2 top-1/2 mx-auto min-w-[310px] max-w-sm -translate-x-1/2 -translate-y-1/2 transform space-y-4 p-6 text-center sm:min-w-[385px]">
      <div className="space-y-4">
        <div className="mb-3 text-2xl font-bold">Log in</div>
        <div className="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
          <input
            type="text"
            placeholder="Email or username"
            className="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
          />
        </div>
        <div className="flex w-full items-center space-x-2 rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
          <input
            type="password"
            placeholder="Password"
            className="my-3 w-full border-none bg-transparent outline-none"
          />
          <a
            href="/#"
            className="font-medium text-gray-400 hover:text-gray-500"
          >
            FORGOT?
          </a>
        </div>
        <button
          type="submit"
          className="w-full rounded-2xl border-b-4 border-b-blue-600 bg-blue-500 py-3 font-bold text-white hover:bg-blue-400 active:translate-y-[0.125rem] active:border-b-blue-400"
        >
          LOG IN
        </button>
      </div>

      <div className="flex items-center space-x-4">
        <hr className="w-full border border-gray-300" />
        <div className="font-semibold text-gray-400">OR</div>
        <hr className="w-full border border-gray-300" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <a
          href="/#"
          className="rounded-2xl border-b-2 border-b-gray-300 bg-white px-4 py-2.5 font-bold text-blue-700 ring-2 ring-gray-300 hover:bg-gray-200 active:translate-y-[0.125rem] active:border-b-gray-200"
        >
          FACEBOOK
        </a>
        <a
          href="/#"
          className="rounded-2xl border-b-2 border-b-gray-300 bg-white px-4 py-2.5 font-bold text-blue-500 ring-2 ring-gray-300 hover:bg-gray-200 active:translate-y-[0.125rem] active:border-b-gray-200"
        >
          GOOGLE
        </a>
      </div>

      <div className="mt-8 text-sm text-gray-400">
        By signing in to ********, you agree to our
        <a href="/#" className="font-medium text-gray-500">
          Terms
        </a>{' '}
        and{' '}
        <a href="/#" className="font-medium text-gray-500">
          Privacy Policy
        </a>
        .
      </div>
    </form>
  );
};
