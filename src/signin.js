// src/components/SignIn.js
import React from "react";
import { signInWithGoogle, signInWithEmailPassword } from "./auth"; // Update with your authentication functions

const SignIn = () => {
  const handleSignInEmailPassword = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      await signInWithEmailPassword(email, password);
      // Optionally redirect to another page on successful login
    } catch (error) {
      console.error("Error signing in with email/password:", error);
      // Handle error (e.g., display error message)
    }
  };

  const handleSignInGoogle = async () => {
    try {
      await signInWithGoogle();
      // Optionally redirect to another page on successful login
    } catch (error) {
      console.error("Error signing in with Google:", error);
      // Handle error (e.g., display error message)
    }
  };

  return (
    // <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    //   <div className="max-w-md w-full space-y-8">
    //     <div>
    //       <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
    //     </div>

    //     {/* Email/Password Sign-In Form */}
    //     <form onSubmit={handleSignInEmailPassword} className="mt-8 space-y-6">
    //       <input type="hidden" name="remember" value="true" />
    //       <div className="rounded-md shadow-sm -space-y-px">
    //         <div>
    //           <label htmlFor="email-address" className="sr-only">
    //             Email address
    //           </label>
    //           <input
    //             id="email-address"
    //             name="email"
    //             type="email"
    //             autoComplete="email"
    //             required
    //             className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
    //             placeholder="Email address"
    //           />
    //         </div>
    //         <div>
    //           <label htmlFor="password" className="sr-only">
    //             Password
    //           </label>
    //           <input
    //             id="password"
    //             name="password"
    //             type="password"
    //             autoComplete="current-password"
    //             required
    //             className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
    //             placeholder="Password"
    //           />
    //         </div>
    //       </div>
    //       <div>
    //         <button
    //           type="submit"
    //           className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    //         >
    //           Sign in with Email/Password
    //         </button>
    //       </div>
    //     </form>

    //     {/* Google Sign-In Button */}
    //     <div className="flex justify-center">
    //       <button
    //         onClick={handleSignInGoogle}
    //         className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
    //       >
    //         Sign in with Google
    //       </button>
    //     </div>
    //   </div>

    <div class="flex flex-wrap w-full">
      <div class="flex flex-col w-full md:w-1/2">
        <div class="flex justify-center pt-12 md:justify-start md:pl-12 md:-mb-24">
          <a href="#" class="p-4 text-xl font-bold text-white bg-black">
            Kotha.
          </a>
        </div>
        <div class="flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32">
        <p class="text-3xl text-center">Welcome to Kotha</p>
        <p class="text-lg text-center">Sign In</p>
          <form
            class="flex flex-col pt-3 md:pt-8"
            onSubmit={handleSignInEmailPassword}
          >
            <div class="flex flex-col pt-4">
              <div class="flex relative ">
                <span class=" inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                  <svg
                    width="15"
                    height="15"
                    fill="currentColor"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"></path>
                  </svg>
                </span>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  class=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Email"
                />
              </div>
            </div>
            <div class="flex flex-col pt-4 mb-12">
              <div class="flex relative ">
                <span class=" inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                  <svg
                    width="15"
                    height="15"
                    fill="currentColor"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z"></path>
                  </svg>
                </span>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  class=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Password"
                />
              </div>
            </div>
            <button
              type="submit"
              class="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-black shadow-md hover:text-black hover:bg-white focus:outline-none focus:ring-2 rounded-lg "
            >
              <span class="w-full">Submit</span>
            </button>
            <button
            onClick={handleSignInGoogle}
              type="button"
              class="my-2 py-2 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-300 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                class="mr-2"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z"></path>
              </svg>
              Google
            </button>
          </form>
          <div class="pt-12 pb-12 text-center">
            <p>
              Don&#x27;t have an account?
              <a href="/signup" class="font-semibold underline">
                Register here.
              </a>
            </p>
          </div>
        </div>
      </div>
      <div class="w-1/2 shadow-2xl">
        <img
          class="hidden object-cover w-full h-screen md:block"
          src="https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </div>
  );
};

export default SignIn;
