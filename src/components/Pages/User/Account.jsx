import React from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import { useAuth0 } from "@auth0/auth0-react";

const Account = () => {
  const { user, isAuthenticated, logout } = useAuth0();
  return (
    <section>
      <Navbar />
      {isAuthenticated ? (
        <section className="min-h-screen p-12 m-12">
          <div className="my-1">
            <h1 className="text-5xl font-semibold text-gray-700">Account</h1>
          </div>
          <hr class="h-px my-8 bg-gray-700 border-0 w-2/3 " />
          <div>
            <h1 className="text-lg font-semibold text-gray-700">Email</h1>
            <h2 className="text-2xl font-semibold text-gray-700">
              {user.email}
            </h2>
          </div>
          <div className="my-12 p-5 bg-red-200 max-w-2xl rounded-2xl space-y-4">
            <button
              onClick={() => logout()}
              className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg px-4 py-2 text-center mr-1 md:mr-0 transition duration-200"
            >
              Logout
            </button>
          </div>
        </section>
      ) : (
        <div className="text-center">
          <p className="text-3xl my-4">
            Please Sign In To View Your Account Details
          </p>
        </div>
      )}

      <Footer />
    </section>
  );
};

export default Account;
