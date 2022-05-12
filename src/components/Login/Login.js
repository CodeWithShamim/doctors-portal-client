import React from "react";

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen font-serif mx-4 md:mx-0">
      {/* _______card start__________ */}
      <div class="card w-96 bg-base-100 shadow-xl">
        {/* ________card body start_______ */}
        <div class="card-body items-center text-left">
          <h2 class="card-title">Login</h2>
          <form className="grid w-full">
            <label htmlFor="email">Email</label>
            <input
              className="border-2 rounded-lg p-2 mb-3"
              type="email"
              name="email"
              id="email"
            />
            <label htmlFor="password">Password</label>
            <input
              className="border-2 rounded-lg p-2"
              type="password"
              name="password"
              id="password"
            />
            <span className="mb-4 text-xs p-2 cursor-pointer">
              Forgotton password?
            </span>

            <input
              className="cursor-pointer uppercase rounded-lg w-full text-base-300 text-md p-3 font-bold bg-black"
              type="submit"
              value="Login"
            />
          </form>

          {/* _________divider__________ */}
          <div class="flex flex-col w-full border-opacity-50">
            <p className="px-6 py-2 font-sans">
              New to Doctors Portal?{" "}
              <span className="text-secondary text-sm cursor-pointer">
                Create new account?
              </span>
            </p>
            <div class="divider">OR</div>
            <div class="btn bg-transparent hover:bg-transparent text-black grid h-15 border-2 py-2 cursor-pointer card rounded-box place-items-center">
              CONTINUE WITH GOOGLE
            </div>
          </div>
          {/* __________divider end_____________ */}
        </div>
        {/* __________card body end__________ */}
      </div>
      {/* _______card end */}
    </div>
  );
};

export default Login;
