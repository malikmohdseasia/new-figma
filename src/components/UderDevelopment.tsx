const UnderDevelopment = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        {/* Icon */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-indigo-100">
          <svg
            className="h-10 w-10 text-indigo-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 3v2.25m4.5-2.25v2.25M3 9.75h18M5.25 6.75h13.5a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-9a2.25 2.25 0 012.25-2.25z"
            />
          </svg>
        </div>

        {/* Text */}
        <h1 className="text-3xl font-semibold text-gray-900">
          Page Under Development
        </h1>
        <p className="mt-3 text-gray-500">
          We’re working hard to bring you this feature.  
          Please check back soon 🚀
        </p>

        {/* Button */}
        <button
          onClick={() => window.history.back()}
          className="mt-6 rounded-lg bg-indigo-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-indigo-700 transition"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default UnderDevelopment;
