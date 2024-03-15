export const SignInPage = () => {
  return (
    <form className="absolute left-1/2 top-1/2 m-auto min-w-[310px] max-w-sm -translate-x-1/2 -translate-y-1/2 transform space-y-4 text-center sm:min-w-[385px]">
      <div className="mb-3 text-2xl font-bold">Create your profile</div>
      <div className="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
        <input
          required
          type="text"
          placeholder="Name"
          className="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
        />
      </div>
      <div className="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
        <input
          required
          type="text"
          placeholder="Email"
          className="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
        />
      </div>
      <div className="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
        <input
          required
          type="password"
          placeholder="Password"
          className="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-2xl border-b-4 border-b-blue-600 bg-blue-500 py-3 font-bold text-white hover:bg-blue-400 active:translate-y-[0.125rem] active:border-b-blue-400"
      >
        CREATE ACCOUNT
      </button>
    </form>
  );
};
