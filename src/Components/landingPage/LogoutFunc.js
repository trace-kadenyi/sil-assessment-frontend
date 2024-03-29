import React from "react";

const LogoutFunc = () => {
  // function to logout
  const logout = () => {
    // clear the local storage
    localStorage.clear();
    // reload the page
    window.location.reload();
  };

  return (
    <div>
      <button
        onClick={logout}
        type="button"
        className="py-2 px-4 w-28 flex justify-center items-center bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg display-flex justify-center items-center mt-10 mx-auto mb-10"
      >
        Logout
      </button>
    </div>
  );
};

export default LogoutFunc;
