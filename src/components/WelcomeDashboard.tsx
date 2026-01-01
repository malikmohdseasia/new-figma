const WelcomeDashboard = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full text-center">
        <h1 className="text-2xl font-semibold text-gray-800">
          Welcome to Dashboard 👋
        </h1>

        <p className="mt-3 text-gray-500">
          You’re successfully logged in. Start managing your data from here.
        </p>

        <div className="mt-6 flex gap-4 justify-center">
          <button className="px-5 h-10 rounded-md bg-indigo-600 text-white text-[12px] sm:text-sm hover:bg-indigo-700 transition ">
            Get Started
          </button>

          <button className="px-5 h-10 rounded-md border border-gray-300 text-[12px] sm:text-sm text-gray-700 hover:bg-gray-100 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeDashboard;
